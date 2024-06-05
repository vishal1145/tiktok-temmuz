const ExcelModel = require("../models/excel.model");


exports.getExcels = async () => {
  return await ExcelModel.find();
};
