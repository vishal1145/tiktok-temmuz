const mongoose = require("mongoose");

// this is not in use 
const commissionSchema = new mongoose.Schema({
  first_commission: { type: String, default: 0.01 },
  second_commission: { type: String, default: 0.02 },
  third_commission: { type: String, default: 0.03 }
  // uid: { type: String,unique: true},
  
});

module.exports = mongoose.model("commissions", commissionSchema);
