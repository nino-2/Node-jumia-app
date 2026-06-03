const axios = require("axios");
const cartModel = require("../models/cart.model");
const addressModel = require("../models/address.model");
const userModel = require("../models/user.model");
const orderModel = require("../models/order.model");

const paystackBaseUrl = "https://api.paystack.co";

const getPaystackHeaders = () => ({
  Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
  "Content-Type": "application/json",
});

const createOrderNumber = () => `JUMIA-${Date.now()}`;

const getFrontendCallbackUrl = () => {
  if (process.env.NODE_ENV === "production" && process.env.FRONTEND_PROD_URL) {
    return `${process.env.FRONTEND_PROD_URL.replace(/\/$/, "")}/checkout`;
  }

  return (
    process.env.FRONTEND_CALLBACK_URL ||
    `${(process.env.FRONTEND_URL || "").replace(/\/$/, "")}/checkout`
  );
};

const getCartTotal = (items) =>
  items.reduce(
    (total, item) => total + (item.product?.salesprice || 0) * item.quantity,
    0
  );

const initializePayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { addressId } = req.body;

    if (!process.env.PAYSTACK_SECRET_KEY) {
      return res
        .status(500)
        .json({ status: false, message: "Paystack secret key is not set" });
    }

    const callbackUrl = getFrontendCallbackUrl();
    if (!callbackUrl) {
      return res
        .status(500)
        .json({ status: false, message: "Frontend callback URL is not set" });
    }

    if (!addressId) {
      return res
        .status(400)
        .json({ status: false, message: "Delivery address is required" });
    }

    const user = await userModel.findById(userId).select("email firstname");
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found" });
    }

    const address = await addressModel.findOne({ _id: addressId, user: userId });
    if (!address) {
      return res
        .status(404)
        .json({ status: false, message: "Delivery address not found" });
    }

    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");

    if (!cart || !cart.items.length) {
      return res
        .status(400)
        .json({ status: false, message: "Your cart is empty" });
    }

    const amount = getCartTotal(cart.items);
    const amountInKobo = Math.round(amount * 100);
    if (amount <= 0) {
      return res
        .status(400)
        .json({ status: false, message: "Cart total must be greater than 0" });
    }

    const reference = `JUMIA-${Date.now()}-${userId}`;

    const paystackResponse = await axios.post(
      `${paystackBaseUrl}/transaction/initialize`,
      {
        email: user.email,
        amount: amountInKobo,
        currency: "NGN",
        reference,
        callback_url: callbackUrl,
        metadata: {
          userId,
          addressId,
        },
      },
      { headers: getPaystackHeaders() }
    );

    return res.status(200).json({
      status: true,
      message: "Payment initialized successfully",
      reference,
      authorization_url: paystackResponse.data.data.authorization_url,
      access_code: paystackResponse.data.data.access_code,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message:
        error.response?.data?.message || "Unable to initialize payment",
      error: error.message,
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { reference } = req.params;

    if (!process.env.PAYSTACK_SECRET_KEY) {
      return res
        .status(500)
        .json({ status: false, message: "Paystack secret key is not set" });
    }

    const existingOrder = await orderModel.findOne({
      user: userId,
      paymentReference: reference,
    });

    if (existingOrder) {
      await cartModel.findOneAndUpdate(
        { user: userId },
        { $set: { items: [] } }
      );

      return res.status(200).json({
        status: true,
        message: "Payment already verified",
        order: existingOrder,
      });
    }

    const paystackResponse = await axios.get(
      `${paystackBaseUrl}/transaction/verify/${reference}`,
      { headers: getPaystackHeaders() }
    );

    const paymentData = paystackResponse.data.data;
    if (paymentData.status !== "success") {
      return res.status(400).json({
        status: false,
        message: "Payment was not successful",
        paymentStatus: paymentData.status,
      });
    }

    const addressId = paymentData.metadata?.addressId;
    const address = await addressModel.findOne({ _id: addressId, user: userId });
    if (!address) {
      return res
        .status(404)
        .json({ status: false, message: "Delivery address not found" });
    }

    const cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");

    if (!cart || !cart.items.length) {
      return res.status(400).json({
        status: false,
        message: "Cart is empty. Unable to create order",
      });
    }

    const amount = getCartTotal(cart.items);
    const amountInKobo = Math.round(amount * 100);

    if (Number(paymentData.amount) !== amountInKobo) {
      return res.status(400).json({
        status: false,
        message: "Paid amount does not match cart total",
      });
    }

    const order = await orderModel.create({
      orderNumber: createOrderNumber(),
      user: userId,
      items: cart.items.map((item) => ({
        product: item.product._id,
        name: item.product.name,
        image: item.product.images?.[0],
        price: item.product.salesprice,
        quantity: item.quantity,
      })),
      shippingAddress: {
        firstname: address.firstname,
        lastname: address.lastname,
        phonenumber: address.phonenumber,
        deliveryadd: address.deliveryadd,
        addinfo: address.addinfo,
        state: address.state,
        city: address.city,
      },
      amount,
      paymentReference: reference,
      paymentStatus: "success",
      paidAt: new Date(),
      paystackData: paymentData,
    });

    cart.items = [];
    await cart.save();

    return res.status(200).json({
      status: true,
      message: "Payment verified and order saved successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.response?.data?.message || "Unable to verify payment",
      error: error.message,
    });
  }
};

module.exports = { initializePayment, verifyPayment };
