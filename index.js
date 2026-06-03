const express = require("express");
const app = express();
const PORT = 5001;
const ejs = require("ejs");
const mongoose = require("mongoose");
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const stateRouter = require("./routes/state.route");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");
const addressRouter = require("./routes/address.route");
const paymentRouter = require("./routes/payment.route");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/api", stateRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/address", addressRouter);
app.use("/payment", paymentRouter);

let URI = process.env.MONGODB_URI;

require("dotenv").config();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_PROD_URL,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: false,
  }),
);

mongoose
  .connect(URI)
  .then(() => {
    console.log("mongodb connected successfully");
  })
  .catch((err) => {
    console.log("mongodb didnt connect", err);
  });

app.listen(PORT, (err) => {
  if (err) {
    console.log("server didnt start");
  } else {
    console.log("server has started");
  }
});
