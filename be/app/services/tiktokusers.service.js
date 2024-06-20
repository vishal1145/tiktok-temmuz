const tiktokUsersModel = require("../models/tiktokusers.model");
const commission = require('../models/commission.model');
const PublisherModel = require("../models/creator.model");
const otpGenerator = require("otp-generator");
const axios = require('axios');
const mongoose = require("mongoose");
const ExcelDataModel = require("../models/excel_data.model");

exports.tiktokLogin = async (body) => {
  var user = await tiktokUsersModel.findOne({ contact_number: body.contact_number });
  if (!user) {
    user = new tiktokUsersModel(body);
    await user.save();

    const commissions = await commission.findOne();
    await tiktokUsersModel.findByIdAndUpdate(user._id, {
      $set: {
        first_commission: commissions.first_commission,
        second_commission: commissions.second_commission,
        third_commission: commissions.third_commission
      },
    })
  }

  try {
    sendOtp(body.contact_number);
  } catch (error) {
    return error.message;
  }

  return { user };
};

const sendOtp = async (num) => {
  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  await tiktokUsersModel.findOneAndUpdate({ contact_number: num }, { otp: otp });

  const payload = {
    "number": num,
    "type": "text",
    "message": `Hey there, We are thrilled to see you join us at TikTok! Your OTP code is ${otp}. Please enter this code to verify your account.`,
    "instance_id": "6579DE51A10A7",
    "access_token": "6579dde43cf51"
  }

  try {
    const response = await axios.post('https://cloud.wpotomesaj.com/api/send', payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return true;
  } catch (error) {
    return false;
  }
}


exports.isMemberExists = async (body) => {
  const user = await tiktokUsersModel.findOne({ contact_number: body.contact_number });
  if (user) {
    await sendOtp(body.contact_number);
  }
  return { user };
}

exports.memberDelete = async (_id) => {
  const member = await tiktokUsersModel.findById(_id);
  if (member) {
    await tiktokUsersModel.findByIdAndDelete(_id);
  } else {
    throw new Error('user is not found');
  }
}

exports.memberUpdate = async (body) => {
  console.log("node", body)
  await tiktokUsersModel.findByIdAndUpdate(body._id, {
    $set: {
      contact_number: body.contact_number,
      name: body.name,
      surname: body.surname,
      tiktok_username: body.tiktok_username,
      bank: {
        full_name: body.bank.full_name,
        identity_citizenship_no: body.bank.identity_citizenship_no,
        bank_name: body.bank.bank_name,
        iban: body.bank.iban
      }
    },
  })
}

exports.memberUpdateProfile = async (body) => {
  console.log("node", body)
  await tiktokUsersModel.findByIdAndUpdate(body._id, {
    $set: {
      image: body.image,
    },
  })
}

exports.memberUpdateCommission = async (body) => {
  console.log("node", body)
  await tiktokUsersModel.findByIdAndUpdate(body._id, {
    $set: {
      first_commission: body.first_commission * 0.01,
      second_commission: body.second_commission * 0.01,
      third_commission: body.third_commission * 0.01
    },
  })
}

exports.resendOtp = async (num) => {
  const res = await sendOtp(num);
  return res;
}

exports.topFiveDiamondsMembersMonth = async () => {
  const d = new Date();
  const present_month = d.getMonth();
  const present_year = d.getFullYear();
  const users = await tiktokUsersModel.find({ role: "user" });
  const excel_data = await ExcelDataModel.find();
  const data = [];
  for (let i = 0; i < users.length; i++) {
    let id = users[i]._id.toString();
    const user_creators = await PublisherModel.aggregate([
      { $match: { user_id: new mongoose.Types.ObjectId(id) } },
    ]);

    let excel_records = excel_data.filter(ex =>
      user_creators.some(cre => cre._id == ex.creator_id && cre.tiktok_username == ex.creator_inf));

    let totalDiamondsInMonth = 0;
    excel_records.forEach(e => {
      const month = new Date(e.as_of_date).getMonth();
      const year = new Date(e.as_of_date).getFullYear();
      if (year == present_year && month == present_month) {
        totalDiamondsInMonth += parseInt(e.diamonds_this_month);
      }
    });
    body = {
      username: users[i].tiktok_username, diamonds: totalDiamondsInMonth
    }
    data.push(body);
  }
  const sort_array = data.filter((e) => e.diamonds > 0);
  sort_array.sort((a, b) => b.diamonds - a.diamonds);
  const top_five_users = sort_array.slice(0, 5);

  return { top_five_users };
}

exports.topFiveEarningsMembersMonth = async () => {
  const d = new Date();
  const present_month = d.getMonth();
  const present_year = d.getFullYear();
  const users = await tiktokUsersModel.find({ role: "user" });
  const excel_data = await ExcelDataModel.find();
  const data = [];
  for (let i = 0; i < users.length; i++) {
    let id = users[i]._id.toString();
    const user_creators = await PublisherModel.aggregate([
      { $match: { user_id: new mongoose.Types.ObjectId(id) } },
    ]);

    let first_commission = users[i].first_commission;
    let second_commission = users[i].second_commission;
    let third_commission = users[i].third_commission;

    let excel_records = excel_data.filter(ex =>
      user_creators.some(cre => cre._id == ex.creator_id && cre.tiktok_username == ex.creator_inf));

    let totalEarningsInMonth = 0;
    excel_records.forEach(d => {
      const month = new Date(d.as_of_date).getMonth();
      const year = new Date(d.as_of_date).getFullYear();
      if (year == present_year && month == present_month) {
        totalEarningsInMonth += calculateEarning(first_commission, second_commission, third_commission, d)//parseInt(e.diamonds_this_month); 
      }
    });
    body = {
      username: users[i].tiktok_username, earnings: totalEarningsInMonth
    }
    data.push(body);
  }
  const sort_array = data.filter((e) => e.earnings > 0);
  sort_array.sort((a, b) => b.earnings - a.earnings);
  const top_five_users = sort_array.slice(0, 5);

  return { top_five_users };
}

function calculateEarning(first_commission, second_commission, third_commission, d) {
  var rate = first_commission;
  if (d.diamonds_this_month >= 300000 && d.diamonds_this_month < 500000) {
    rate = second_commission;
  }
  if (d.diamonds_this_month >= 500000) {
    rate = third_commission;
  }
  let num = rate * d.diamonds_this_month / 100;
  let earn = truncateToDecimals(num, 2);
  return earn;//.toFixed(2);
}

function truncateToDecimals(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.floor(num * factor) / factor;
}

exports.topFiveCreatorsDiamondsMonth = async () => {
  const d = new Date();
  const present_month = d.getMonth();
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


    if (year == present_year && month == present_month) {
      if (dataMap.has(username)) {
        const existing = dataMap.get(username);
        existing.diamonds += diamonds;
      } else {
        dataMap.set(username, { diamonds });
      }
    }
  });

  const sort_array = Array.from(dataMap.entries())
    .map(([username, { diamonds }]) => ({ username, diamonds }))
    .filter(e => e.diamonds > 0)
    .sort((a, b) => b.diamonds - a.diamonds);

  const top_five_creators = sort_array.slice(0, 5);

  return { top_five_creators };
}

exports.topFiveMembersMostCreators = async () => {
  const users = await tiktokUsersModel.find({ role: "user" });

  const data = await Promise.all(users.map(async (user) => {
    const creatorsCount = await PublisherModel.countDocuments({ user_id: user._id });
    return { username: user.tiktok_username, creators: creatorsCount };
  }));

  const sort_array = data.filter(e=>e.creators > 0).sort((a, b) => b.creators - a.creators);

  const top_five_creators = sort_array.slice(0, 5);

  return { top_five_creators };
}