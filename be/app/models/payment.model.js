const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  request_date: { type: Date, default: Date.now },
  amount: { type: Number, required: true, min: 0 },
  status: { type: String, default: "Pending" },
  notes: { type: String, default: null },
  user_id: { type: mongoose.Types.ObjectId, ref: "member" },
  reason: { type: String, default: null }
});

// Export the model
module.exports = mongoose.model("payment", PaymentSchema);
