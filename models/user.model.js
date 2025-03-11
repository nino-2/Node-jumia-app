const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: [true, "passsword is required"] },
  firstname: { type: String },
  lastname: { type: String },
  phonenumber: { type: String },
  gender: {
    type: String,
  },
  birthdate: { type: String },
});
let saltRound = 10;
userSchema.pre("save", function (next) {
  console.log(this.password);
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (err) {
      console.log("hash not successful");
    } else {
      console.log(hashedPassword);
      this.password = hashedPassword;
      next();
    }
  });
});

userSchema.methods.validatePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, same) => {
    if (!err) {
      console.log(same);
      callback(err, same);
    } else {
      next();
    }
  });
};

let userModel = mongoose.model("User", userSchema);
module.exports = userModel;
