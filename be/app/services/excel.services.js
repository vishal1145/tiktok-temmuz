const ExcelModel = require("../models/excel.model");
const ExcelDataModel = require("../models/excel_data.model");
const PublisherModel = require("../models/creator.model");
const CommissionModel = require("../models/commission.model");
const UserModel = require("../models/tiktokusers.model");
const { calculateEarning } = require("../middleware/calculate.earnings");

exports.getExcels = async () => {
  return await ExcelModel.find();
};

exports.getCreatorsEarnings = async (_id) => {
  // const creators = await PublisherModel.find({ user_id: _id });
  let creators = await PublisherModel.find();
  if (_id) {
    creators = await PublisherModel.find({ user_id: _id });
  }
  if (creators.length > 0) {
    const usernames = creators.map((e) => e.tiktok_username);
    const data = await ExcelDataModel.find({ creator_inf: { $in: usernames } });
    data.sort((a, b) => new Date(a.as_of_date) - new Date(b.as_of_date));

    // let user = await UserModel.findById(_id);
    let allUsers = await UserModel.find();
   
    var newdata = data.map((d) => {
      let creator = creators.find((u) => u._id == d.creator_id);
      let user = allUsers.find((e)=> e._id.toString() === creator.user_id.toString());
      let first_commission = user.first_commission;
      let second_commission = user.second_commission;
      let third_commission = user.third_commission;
  
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