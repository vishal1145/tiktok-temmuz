const mongoose  = require("mongoose");
// this is logged in user model
const memberSchema = new mongoose.Schema({
  contact_number: { type: String },
  otp : { type: String },
  role : { type: String },
  name : { type: String },
  surname : { type: String },
  tiktok_username : { type: String },
  image: { type: String, default: "" },
  first_commission: { type: String },
  second_commission: { type: String },
  third_commission: { type: String },
  bank: {
    full_name: { type: String },
    identity_citizenship_no: { type: String },
    bank_name: { type: String },
    iban: { type: String }
  }
})

module.exports = mongoose.model("member", memberSchema);


