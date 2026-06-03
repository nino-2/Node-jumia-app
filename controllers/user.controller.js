const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");

// Signup
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: false, message: "Email already in use" });
    }

    const form = new userModel({ email, password });
    await form.save();

    return res
      .status(201)
      .json({ status: true, message: "Step 1: Proceed to the next step" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
};

// Update user
const updateUser = async (req, res) => {
  const { email, firstname, lastname, phonenumber } = req.body;
  try {
    const user = await userModel.findOneAndUpdate(
      { email },
      { firstname, lastname, phonenumber },
      { new: true, select: "-password" }
    );

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.json({ status: true, message: "Step 2 completed, One more" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// Update user
const updatedUser = async (req, res) => {
  const { email, gender, birthdate } = req.body;
  try {
    const user = await userModel.findOneAndUpdate(
      { email },
      { gender, birthdate },
      { new: true, select: "-password" }
    );

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    return res.json({ status: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// Check user
const checkUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });

    return res.status(200).json({
      status: !!user,
      message: user ? "User exists" : "User does not exist",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// Login
const confirmUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, firstname: user.firstname },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      status: true,
      message: "User found",
      firstname: user.firstname,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

const logoutUser = async (req, res) => {
  res.status(200).json({ status: true, message: "Logged out successfully" });
};

// Profile
const userProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ status: false, message: "user not found" });
    }
    res.status(200).json({
      status: true,
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// Request Password
const requestUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "Email not registered" });
    }

    const now = Date.now();
    if (user.lastOtpRequest && now - user.lastOtpRequest < 60000) {
      return res.status(429).json({
        status: false,
        message: "Please wait before requesting a new code.",
      });
    }

    const resetCode = Math.floor(1000 + Math.random() * 9000).toString();
    user.resetCode = resetCode;
    user.resetCodeExpires = now + 1 * 60 * 1000;
    user.lastOtpRequest = now;

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: user.email,
      subject: "Password Reset Code",
      text: `Your reset code is: ${resetCode}`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ status: true, message: "Reset code sent to email" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

// Verify Password
const verifyUser = (req, res) => {
  let { email, resetCode } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        console.log(`user not found with ${email}`);
        return res
          .status(404)
          .json({ status: false, message: "Email not registered" });
      }

      console.log(`Verifying reset code for ${email}`);
      console.log(
        `Received reset code: ${resetCode}, Stored reset code: ${user.resetCode}`
      );

      if (user.resetCodeExpires < Date.now()) {
        console.log("Reset code expired");
        user.resetCode = null; // Clear expired code
        user.resetCodeExpires = null;
        return user.save().then(() => {
          res.status(400).json({
            status: false,
            message: "Reset code expired. Request a new one.",
          });
        });
      }

      if (String(user.resetCode) !== String(resetCode)) {
        console.log("invalid reset code");
        return res
          .status(400)
          .json({ status: false, message: "Invalid reset code" });
      }

      // Clear reset code after successful verification
      user.resetCode = null;
      user.resetCodeExpires = null;
      return user.save().then(() => {
        console.log("reset code verified");
        res.status(200).json({
          status: true,
          message: "Reset code verified. You can reset your password now.",
        });
      });
    })
    .catch((error) => {
      console.error("Server error:", error);
      res
        .status(500)
        .json({ status: false, message: "Server error", error: error.message });
    });
};

// Reset Password
const resetUser = async (req, res) => {
  const { email, newPassword } = req.body;
  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = newPassword;
    user.resetCode = null;
    user.resetCodeExpires = null;
    await user.save();

    const token = jwt.sign(
      { id: user._id, firstname: user.firstname },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    return res.status(200).json({
      status: true,
      message: "Password reset successful",
      firstname: user.firstname,
      token,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
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
};
