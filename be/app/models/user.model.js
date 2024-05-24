const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: { type: String, unique: true },
  contact_number: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  image: { type: String },
  role: { type: String },
  otp: { type: Number },
});

module.exports = mongoose.model("user", userSchema);
