const express = require("express");
const userRouter = express.Router();
const auth = require("../middleware/auth");
const {
  registerUser,
  updateUser,
  updatedUser,
  checkUser,
  confirmUser,
  logoutUser,
  userProfile,
  requestUser,
  verifyUser,
  resetUser,
} = require("../controllers/user.controller");

userRouter.post("/register", registerUser);
userRouter.patch("/update", updateUser);
userRouter.patch("/updated", updatedUser);
userRouter.post("/check", checkUser);
userRouter.post("/login", confirmUser);
userRouter.post("/logout", auth, logoutUser);
userRouter.get("/profile", auth, userProfile);
userRouter.post("/request", requestUser);
userRouter.post("/verify", verifyUser);
userRouter.post("/reset", resetUser);

module.exports = userRouter;
