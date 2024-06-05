const mongoose  = require("mongoose");
// this is logged in user model
const memberSchema = new mongoose.Schema({
  first_name: { type: String, unique: true},
  last_name: { type: String, unique: true},
  tiktop_username: { type: String, unique: true},
  contact_number: { type: String },
  otp : { type: String },
  role : { type: String },
  name : { type: String },
  surname : { type: String },
  tiktok_username : { type: String },
})

module.exports = mongoose.model("member", memberSchema);


