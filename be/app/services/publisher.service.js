const PublisherModel = require("../models/creator.model");
const tiktokUsersModel = require("../models/tiktokusers.model");
const ExcelDataModel = require("../models/excel_data.model");
const UserModel = require("../models/tiktokusers.model");
const { calculateEarning } = require("../middleware/calculate.earnings");
const mongoose = require("mongoose");
const { body } = require("express-validator");

// admin case
exports.getAllPublisher = async () => {
  const publishers = await PublisherModel.find().populate('user_id').sort({ createdAt: -1 });
  return publishers;
};

exports.getAllMembersPublishers = async (_id) => {
  const publishers = await PublisherModel.aggregate([
    { $match: { user_id: new mongoose.Types.ObjectId(_id) } },
    { $sort: { createdAt: -1 } }
  ]);
  return publishers;
};

exports.getCreator = async (name) => {
  const creator = await PublisherModel.find({ tiktok_username: name });
  return creator;
};

exports.getMember = async (name) => {
  const member = await tiktokUsersModel.find({ tiktok_username: name });
  return member;
};



exports.createPublisher = async (user_body) => {
  const publisher = PublisherModel(user_body);
  const created = await publisher.save();
  return created;
}



exports.updatePublisherStatus = async (id, data) => {
  try {
    await PublisherModel.findByIdAndUpdate(id, {
      $set: {
        status: data.status,
        reason: data.reason
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}


exports.canUpdatePublisher = async (data) => {

  let isEXist = await PublisherModel.findOne({
    tiktok_username: data.tiktok_username,
  });

  return isEXist;
  //return true;
};

exports.updatePublisher = async (id, data) => {
  try {
    await PublisherModel.findByIdAndUpdate(id, {
      $set: {
        first_name: data.first_name,
        last_name: data.last_name,
        tiktok_username: data.tiktok_username,
        contact_number: data.contact_number,
        agency_center_code: data.agency_center_code,
        icon: data.icon
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

exports.deletePublisher = async (id) => {
  const publisher = await PublisherModel.findById(id);
  if (publisher != null) {
    await PublisherModel.findByIdAndDelete(id);
    return { success: true, Messege: "Publisher Deleted !" };
  } else {
    return { success: false, Messege: "Publisher not found" };
  }

};

exports.creatorDetails = async (body) => {
  const creators = await ExcelDataModel.find({ creator_id: body.creator_id }).select('-percentage_achieved -live_duration_this_month -_id  -__v -valid_days_this_month');
  const user =  await UserModel.findById(body.user_id)
  if (creators.length > 0) {
    creators.sort((a, b) => new Date(b.as_of_date) - new Date(a.as_of_date));

    var newdata = creators.map((d) => {
      let first_commission = user.first_commission;
      let second_commission = user.second_commission;
      let third_commission = user.third_commission;

      const doc = d._doc;
      var earning = calculateEarning(first_commission, second_commission, third_commission, d);
      var affiliated_with = user.tiktok_username;
      return {
        ...doc,
        earning,
        affiliated_with
      };
    })

    return newdata;
  } else {
    return "No Records";
  }
}