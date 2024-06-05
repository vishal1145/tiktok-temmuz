const mongoose = require("mongoose");

const publishSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  tiktok_username: { type: String, unique: true },
  contact_number: { type: String},
  agency_center_code: { type: String },
  icon: { type: String},
  user_id: { type: mongoose.Types.ObjectId, ref: "member" },
  status: {type: String, default: 'Under Review'},
  reason: {type: String, default: null}
})

module.exports = mongoose.model("creator", publishSchema);