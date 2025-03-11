const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
// const registerUser = async (req, res) => {
//   let { email, password } = req.body;
//   try {
//     const existingUser = await userModel.findOne({ email });

//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ status: false, message: "Email already in use" });
//     }
//     let form = new userModel({ email, password });
//     await form.save();
//     res
//       .status(201)
//       .json({ status: true, message: "Step 1: Proceed to the next step" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: false, message: "Internal Server Error" });
//   }
// };

const registerUser = (req, res) => {
  let { email, password } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (user) {
        return res
          .status(400)
          .json({ status: false, message: "Email already in use" });
      }
      let form = new userModel({ email, password });
      form.save();
    })
    .then(() => {
      res
        .status(201)
        .json({ status: true, message: "Step 1: Proceed to the next step" });
    })
    .catch((error) => {
      console.log(error);
    });
};
// const updateUser = async (req, res) => {
//   try {
//     let { email, firstname, lastname, phonenumber } = req.body;

//     let user = await userModel.findOneAndUpdate(
//       { email },
//       { firstname, lastname, phonenumber },
//       { new: true, select: "-password" }
//     );

//     if (!user) {
//       return res.send({ status: false, message: "User not found" });
//     }
//     return res.send({ status: true, message: "Step 2 completed, One more" });
//   } catch (error) {
//     console.log(error);
//   }
// };

const updateUser = (req, res) => {
  let { email, firstname, lastname, phonenumber } = req.body;
  userModel
    .findOneAndUpdate(
      { email },
      { firstname, lastname, phonenumber },
      { new: true, select: "-password" }
    )
    .then((user) => {
      if (!user) {
        return res.send({ status: false, message: "User not found" });
      } else {
        return res.send({
          status: true,
          message: "Step 2 completed, One more",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// const updatedUser = async (req, res) => {
//   try {
//     let { email, gender, birthdate } = req.body;

//     let user = await userModel.findOneAndUpdate(
//       { email },
//       { gender, birthdate },
//       { new: true, select: "-password" }
//     );

//     if (!user) {
//       return res.send({ status: false, message: "User not found" });
//     }
//     return res.send({
//       status: true,
//       message: "User registered successfully",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
const updatedUser = (req, res) => {
  let { email, gender, birthdate } = req.body;
  userModel
    .findOneAndUpdate(
      { email },
      { gender, birthdate },
      { new: true, select: "-password" }
    )
    .then((user) => {
      if (!user) {
        return res.send({ status: false, message: "User not found" });
      } else {
        return res.send({
          status: true,
          message: "User registered successfully",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// const checkUser = async (req, res) => {
//   let { email } = req.body;
//   try {
//     let user = await userModel.findOne({ email });
//     if (user) {
//       return res.status(200).json({ status: true, message: "User exists" });
//     } else {
//       return res
//         .status(200)
//         .json({ status: false, message: "User does not exist" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const checkUser = (req, res) => {
  let { email } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(200).json({ status: true, message: "User exists" });
      } else {
        return res
          .status(200)
          .json({ status: false, message: "User does not exist" });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
// const confirmUser = async (req, res) => {
//   console.log(req.body);
//   let { email } = req.body;
//   try {
//     let user = await userModel.findOne({ email });
//     if (user) {
//       user.validatePassword(req.body.password, (err, same) => {
//         if (err) {
//           console.log(err);
//         } else {
//           if (same) {
//             return res.status(200).json({
//               status: true,
//               message: "proceed to dash",
//               user: { firstname: user.firstname },
//             });
//           }
//           return res
//             .status(400)
//             .json({ status: false, message: "Incorrect password" });
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error, "Wrong Credentials");
//     return res
//       .status(404)
//       .json({ status: false, message: "Wrong credentials" });
//   }
// };
const confirmUser = (req, res) => {
  let { email } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }
      user.validatePassword(req.body.password, (err, same) => {
        if (err) {
          console.log(err);
        }
        if (!same) {
          return res
            .status(401)
            .json({ status: false, message: "Invalid password" });
        }
        let token = jwt.sign(
          { id: user._id, firstname: user.firstname },
          "secret",
          {
            expiresIn: "10h",
          }
        );
        return res.status(200).json({
          status: true,
          message: "user found",
          firstname: user.firstname,
          token,
        });
      });
    })
    .catch((error) => {
      console.log(error, "Server error");
      return res.status(505).json({ status: false, message: "Server error" });
    });
};
// const dashUser = (req, res) => {
//   let token = req.headers.authorization.split(" ")[1];
//   jwt.verify(token, "secret", (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.send({ status: false, message: "inavlid" });
//     } else {
//       console.log(result);
//       return res.send({ status: true, message: "successful" });
//     }
//   });
// };
const requestUser = (req, res) => {
  let { email } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.send({ status: false, message: "Email not registered" });
      }
      let now = Date.now();
      if (user.lastOtpRequest && now - user.lastOtpRequest < 60000) {
        return res.status(429).json({
          status: false,
          message: "Please wait before requesting a new code.",
        });
      }
      const resetCode = Math.floor(1000 + Math.random() * 9000).toString();
      user.resetCode = resetCode;
      user.resetCodeExpires = Date.now() + 1 * 60 * 1000;
      user.lastOtpRequest = now;

      return user.save().then(() => user);
    })
    .then((user) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Password Reset Code",
        text: `Your reset code is: ${user.resetCode}`,
      };
      return transporter.sendMail(mailOptions);
    })
    .then(() => {
      res.send({ status: true, message: "Reset code sent to email" });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        status: false,
        message: "server error",
        error: error.message,
      });
    });
};
const verifyUser = (req, res) => {
  let { email, resetCode } = req.body;
  userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        console.log("email not registered");
        return res
          .status(404)
          .json({ status: false, message: "Email not registered" });
      }

      if (user.resetCodeExpires < Date.now()) {
        console.log("code expired");
        return res
          .status(400)
          .json({ status: false, message: "Reset code expired" });
      }
      // if (user.resetCode !== resetCode) {
      //   console.log("invalid");
      //   return res
      //     .status(400)
      //     .json({ status: false, message: "Invalid reset code" });
      // }
      console.log("proceed");
      res.status(200).json({
        status: true,
        message: "Reset code verified. You can reset your password now.",
      });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ status: false, message: "Server error", error: error.message });
    });
};
// const resetUser = (req, res) => {
//   let { email, newPassword } = req.body;
//   userModel
//     .findOne({ email })
//     .then((user) => {
//       if (!user) {
//         return res.status(404).json({ message: "Email not registered" });
//       }

//       if (user.resetCodeExpires < Date.now()) {
//         return res.status(400).json({ message: "Reset code expired" });
//       }
//       bcrypt.hash(newPassword, 10)
//       .then((hashedPassword) => {
//         user.password = hashedPassword;
//         user.resetCode = null;
//         user.resetCodeExpires = null;
//         return user.save();
//       });
//     })
//     .then(() => {
//       res.status(200).json({ message: "Password reset successful" });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(500).json({ message: "Server error", error: error.message });
//     });
// };
const resetUser = (req, res) => {
  let { email, newPassword } = req.body;
  if (!newPassword) {
    return res.status(400).json({ message: "New password is required" });
  }
  userModel
    .findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      bcrypt.hash(newPassword, 10).then((hashedPassword) => {
        userModel.findOneAndUpdate(
          { email },
          { password: hashedPassword, resetCode: null, resetCodeExpires: null },
          { new: true }
        );
      });
    })
    .then(() => {
      let token = jwt.sign(
        { id: updatedUser._id, firstname: updatedUser.firstname },
        "SECRETTT",
        {
          expiresIn: "10h",
        }
      );
      res
        .status(200)
        .json({
          status: true,
          message: "Password reset successful",
          firstname: updatedUser.firstname,
          token,
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Server error", error: error.message });
    });
};

module.exports = {
  registerUser,
  updateUser,
  updatedUser,
  checkUser,
  confirmUser,
  requestUser,
  verifyUser,
  resetUser,
};
