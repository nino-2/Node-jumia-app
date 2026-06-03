const express = require("express");
const orderRouter = express.Router();
const auth = require("../middleware/auth");
const { getUserOrders } = require("../controllers/order.controller");

orderRouter.get("/", auth, getUserOrders);

module.exports = orderRouter;
