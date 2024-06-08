const mongoose = require("mongoose");

const ExcelDataSchema = new mongoose.Schema({
  'Creator ID': String,
  'Creator information': String,
  'Diamonds this month': String,
  'Percentage achieved': String,
  'LIVE duration this month': String,
  'Valid days this month': String,
});

module.exports = mongoose.model("excelData", ExcelDataSchema);
