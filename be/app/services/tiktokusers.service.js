const tiktokUsersModel = require("../models/tiktokusers.model");
const commission = require('../models/commission.model');
const otpGenerator = require("otp-generator");
const axios = require('axios');


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
      tiktok_username: body.tiktok_username
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
