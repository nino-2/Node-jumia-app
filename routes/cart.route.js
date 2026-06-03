const express = require("express");
const cartRouter = express.Router();
const auth = require("../middleware/auth");
const {
  addCart,
  getCart,
  updateCart,
  removeCart,
} = require("../controllers/cart.controller");
cartRouter.post("/", auth, addCart);
cartRouter.get("/", auth, getCart);
cartRouter.put("/:id", auth, updateCart);
cartRouter.delete("/:id", auth, removeCart);

module.exports = cartRouter;
