const mongoose = require("mongoose");

const publishSchema = new mongoose.Schema({
  user_name: { type: String, unique: true},
  contact_number: { type: String},
  agency_center_code: { type: String },
  icon: { type: String},
  user_id: { type: mongoose.Types.ObjectId, ref: "user" }
})

module.exports = mongoose.model("publish", publishSchema);