const mongoose = require("mongoose");

// this is not in use 
const commissionSchema = new mongoose.Schema({
  first_commission: { type: String, default: 1 },
  second_commission: { type: String, default: 2 },
  // uid: { type: String,unique: true},
  
});

module.exports = mongoose.model("commissions", commissionSchema);
