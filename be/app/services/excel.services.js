const ExcelModel = require("../models/excel.model");
const ExcelDataModel = require("../models/excel_data.model");
const PublisherModel = require("../models/creator.model");

exports.getExcels = async () => {
  return await ExcelModel.find();
};

exports.getCreatorsEarnings = async (_id) => {
  const creators = await PublisherModel.find({ user_id: _id });
  if (creators.length > 0) {
    const usernames = creators.map((e) => e.tiktok_username);
    const data = await ExcelDataModel.find({ creator_inf: { $in: usernames } });
    return data;
  } else {
    throw new Error("User do not have Creators");
  }

};