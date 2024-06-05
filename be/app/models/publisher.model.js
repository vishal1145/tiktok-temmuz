const mongoose = require("mongoose");

const publishSchema = new mongoose.Schema({
  first_name: { type: String, unique: true},
  last_name: { type: String, unique: true},
  tiktok_username: { type: String, unique: true},
  //user_name: { type: String, unique: true},
  contact_number: { type: String},
  agency_center_code: { type: String },
  icon: { type: String},
  user_id: { type: mongoose.Types.ObjectId, ref: "member" },
  status: {type: String, default: 'Under Review'},
  reason: {type: String, default: null}
})

module.exports = mongoose.model("publish", publishSchema);