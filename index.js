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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/api", stateRouter);
dotenv.config();
let URI = process.env.MONGODB_URI;

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
