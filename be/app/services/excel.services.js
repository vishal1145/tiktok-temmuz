const ExcelModel = require("../models/excel.model");
const ExcelDataModel = require("../models/excel_data.model");
const PublisherModel = require("../models/creator.model");
const CommissionModel = require("../models/commission.model");
const UserModel = require("../models/tiktokusers.model");

exports.getExcels = async () => {
  return await ExcelModel.find();
};

function calculateEarning(first_commission, second_commission, third_commission, d) {
  var rate = first_commission;
  if (d.diamonds_this_month >= 300000 && d.diamonds_this_month < 500000) {
    rate = second_commission;
  }
  if (d.diamonds_this_month >= 500000) {
    rate = third_commission;
  }
  return rate * d.diamonds_this_month / 100;
}

exports.getCreatorsEarnings = async (_id) => {
  const creators = await PublisherModel.find({ user_id: _id });
  if (creators.length > 0) {
    const usernames = creators.map((e) => e.tiktok_username);
    const data = await ExcelDataModel.find({ creator_inf: { $in: usernames } });
    data.sort((a, b) => new Date(a.as_of_date) - new Date(b.as_of_date));

    let user = await UserModel.findById(_id);
    let first_commission = user.first_commission;
    let second_commission = user.second_commission;
    let third_commission = user.third_commission;

    var newdata = data.map((d) => {
      const doc = d._doc;
      var earning = calculateEarning(first_commission, second_commission, third_commission, d);
      return {
        ...doc,
        earning
      };
    })

    return newdata;
  } else {
    return "User do not have Creators";
  }

};