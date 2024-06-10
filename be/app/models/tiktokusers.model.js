const mongoose  = require("mongoose");
// this is logged in user model
const memberSchema = new mongoose.Schema({
  contact_number: { type: String },
  otp : { type: String },
  role : { type: String },
  name : { type: String },
  surname : { type: String },
  tiktok_username : { type: String },
  image: { type: String, default: "" }
})

module.exports = mongoose.model("member", memberSchema);


