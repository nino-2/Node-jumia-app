const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstname: String,
    lastname: String,
    phonenumber: String,
    deliveryadd: String,
    addinfo: String,
    state: String,
    city: String,
    isDefault: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let addressModel = mongoose.model("Address", addressSchema);
module.exports = addressModel;
