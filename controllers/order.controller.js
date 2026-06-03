const orderModel = require("../models/order.model");

const getUserOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ user: req.user.id })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      message: "Orders fetched successfully",
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Unable to fetch orders",
      error: error.message,
    });
  }
};

module.exports = { getUserOrders };
