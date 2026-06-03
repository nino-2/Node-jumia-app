const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    image: String,
    price: Number,
    quantity: Number,
  },
  { _id: false }
);

const shippingAddressSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    phonenumber: String,
    deliveryadd: String,
    addinfo: String,
    state: String,
    city: String,
  },
  { _id: false }
);

const orderSchema = mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    shippingAddress: shippingAddressSchema,
    amount: { type: Number, required: true },
    deliveryFee: { type: Number, default: 0 },
    paymentProvider: { type: String, default: "paystack" },
    paymentReference: { type: String, required: true, unique: true },
    paymentStatus: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["processing", "shipped", "delivered", "cancelled"],
      default: "processing",
    },
    paidAt: Date,
    paystackData: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

let orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
