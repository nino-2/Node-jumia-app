const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  ProductById: { type: Number, required: true },
  name: { type: String, required: true },
  brand: { type: String },
  smbrand: { type: String },
  images: [{ type: String }],
  salesprice: { type: Number, required: true },
  initialprice: { type: Number, required: true },
  percent: { type: Number },
  details: {
    info: [
      {
        type: {
          type: String,
          enum: ["text", "bold", "bullet"],
          default: "text",
        },
        content: [{ type: String }],
      },
    ],
    description: [{ type: String }],
    feature: [{ type: String }],
    exlink: { video: { type: String, required: false } },
    genspec: [{ type: String }],
    package: [{ type: String }],
    note: [{ type: String }],
    techparam: [{ type: String }],
  },
  specifications: [
    {
      key: { type: String },
      value: { type: String },
    },
  ],
  keyfeature: [{ type: String }],
  boxcontent: {
    package: [{ type: String }],
    note: [{ type: String }],
    general: [{ type: String }],
  },
  ratings: {
    rating: { type: Number },
    review: { type: Number },
    comment: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    createdAt: { type: Date, default: Date.now },
  },
  direction: [{ type: String }],
  sellerinfo: { type: String },
});
let productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
