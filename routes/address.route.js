const express = require("express");
const addressRouter = express.Router();
const auth = require("../middleware/auth");
const {
  addAddress,
  getAddress,
  getDefaultAddress,
  getAddressById,
  updateAddress,
  removeAddress,
  defaultAddress,
} = require("../controllers/address.controller");

addressRouter.post("/", auth, addAddress);
addressRouter.get("/", auth, getAddress);
addressRouter.get("/default", auth, getDefaultAddress);
addressRouter.get("/:id", auth, getAddressById);
addressRouter.put("/:id", auth, updateAddress);
addressRouter.delete("/:id", auth, removeAddress);
addressRouter.put("/default/:id", auth, defaultAddress);

module.exports = addressRouter;
