const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  user_name: { type: String, unique: true },
  contact_number: { type: String },
  agency_center_code: { type: String },
  icon: { type: String },
  status: { type: String, default: "under review" },
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("publisher", publisherSchema);
