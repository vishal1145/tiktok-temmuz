const mongoose = require("mongoose");

const publishSchema = new mongoose.Schema({
  user_name: { type: String, unique: true},
  contact_number: { type: String},
  agency_center_code: { type: String },
  icon: { type: String},
  user_id: { type: mongoose.Types.ObjectId, ref: "user" },
  status: {type: String, default: 'Under Review'},
  reason: {type: String, default: null}
})

module.exports = mongoose.model("publish", publishSchema);