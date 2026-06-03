const express = require("express");
const paymentRouter = express.Router();
const auth = require("../middleware/auth");
const {
  initializePayment,
  verifyPayment,
} = require("../controllers/payment.controller");

paymentRouter.post("/initialize", auth, initializePayment);
paymentRouter.get("/verify/:reference", auth, verifyPayment);

module.exports = paymentRouter;
