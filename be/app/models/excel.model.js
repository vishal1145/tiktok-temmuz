const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  excel_url: { type: String, unique: true },
  date: { type: String },
});

module.exports = mongoose.model("excel", userSchema);
