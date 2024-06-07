const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  user_name: { type: String },
  request_date: { type: Date, required: true },
  amount: { type: Number, required: true, min: 0 },
  status: { type: String },
  notes: { type: String, default: "" },
  action: { type: String },
  user_id: { type: mongoose.Types.ObjectId, ref: "member" },

}, { timestamps: true });

// Export the model
module.exports = mongoose.model("Payment", PaymentSchema);
