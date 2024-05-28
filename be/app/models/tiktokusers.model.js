const mongoose  = require("mongoose");
const memberSchema = new mongoose.Schema({
  contact_number: { type: String },
  otp : { type: String },
  role : { type: String },
  name : { type: String },
  surname : { type: String },
  tiktok_username : { type: String },
})

module.exports = mongoose.model("member", memberSchema);

