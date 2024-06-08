const mongoose = require("mongoose");

const ExcelDataSchema = new mongoose.Schema({
  as_of_date: { type: String },
  creator_id: { type: String },
  creator_inf: { type: String },
  diamonds_this_month:  { type: String },
  percentage_achieved:  { type: String },
  live_duration_this_month: { type: String },
  valid_days_this_month: { type: String },
});

module.exports = mongoose.model("excelData", ExcelDataSchema);
