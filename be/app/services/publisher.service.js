const PublisherModel = require("../models/creator.model");
const tiktokUsersModel = require("../models/tiktokusers.model");
const ExcelDataModel = require("../models/excel_data.model");
const UserModel = require("../models/tiktokusers.model");
const { calculateEarning } = require("../middleware/calculate.earnings");
const mongoose = require("mongoose");
const { body } = require("express-validator");

// admin case
exports.getAllPublisher = async () => {
  const publishers = await PublisherModel.find().populate({ path: 'user_id', select: '-otp' }).sort({ createdAt: -1 });
  const d = new Date();
  const present_month = d.getMonth();
  const last_month =  present_month - 1;
  const present_year = d.getFullYear();
  const creators = await PublisherModel.find();
  const excel_data = await ExcelDataModel.find();

  const dataMap = new Map();

  let excel_records = excel_data.filter(ex =>
    creators.some(cre => cre._id == ex.creator_id && cre.tiktok_username == ex.creator_inf));

  excel_records.forEach(d => {
    const month = new Date(d.as_of_date).getMonth();
    const year = new Date(d.as_of_date).getFullYear();
    let username = d.creator_inf;
    let diamonds = parseInt(d.diamonds_this_month);


    if (year == present_year && last_month == month) {
      if (dataMap.has(username)) {
        const existing = dataMap.get(username);
        existing.diamonds += diamonds;
      } else {
        dataMap.set(username, { diamonds });
      }
    }
  });

  const sort_array = Array.from(dataMap.entries())
    .map(([username, { diamonds }]) => ({ username, diamonds }));

  const diamondsDict = sort_array.reduce((acc, { username, diamonds }) => {
    acc[username] = diamonds;
    return acc;
  }, {});

  const updatedPublishers = publishers.map(publisher => {
    const tiktokUsername = publisher.tiktok_username;
    publisher = publisher.toObject();
    if (diamondsDict.hasOwnProperty(tiktokUsername)) {
      diamonds = diamondsDict[tiktokUsername];
      publisher.earnings = calculateEarningFun(publisher.user_id.first_commission, publisher.user_id.second_commission, publisher.user_id.third_commission, diamonds)
    } else {
      publisher.earnings = 0
    }
    return publisher;
  });


  return updatedPublishers;
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

exports.creatorDetails = async (username) => {
  const creators = await ExcelDataModel.find({ creator_inf: username }).select('-percentage_achieved -live_duration_this_month -_id  -__v -valid_days_this_month');
  const creator = await PublisherModel.findOne({ tiktok_username: username })
  const user = await UserModel.findById(creator.user_id)
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

function truncateToDecimals(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.floor(num * factor) / factor;
}

function calculateEarningFun(first_commission, second_commission, third_commission, d) {
  var rate = first_commission;
  if (d >= 300000 && d < 500000) {
      rate = second_commission;
  }
  if (d >= 500000) {
      rate = third_commission;
  }
  let num = rate * d / 100;
  let earn = truncateToDecimals(num, 2);
  return earn;//.toFixed(2);
}