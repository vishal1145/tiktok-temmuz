const tiktokUsersModel = require("../models/tiktokusers.model");
const commission = require('../models/commission.model');
const otpGenerator = require("otp-generator");

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

  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  await tiktokUsersModel.findOneAndUpdate({ contact_number: body.contact_number }, { otp: '1234' })

  try {
    // const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
    //   params: {
    //     authorization: process.env.FAST2SMS_API_KEY,
    //     route: 'dlt',
    //     sender_id: 'TXTIND', // Ensure to use your sender ID
    //     message: `Your OTP is ${otp}`,
    //     variables_values: otp,
    //     flash: 0,
    //     numbers: body.contact_number,
    //   },
    // });

    // await client.messages.create({
    //   body: `Your OTP is ${otp}`,
    //   from: config.twilioPhoneNumber,
    //   to: body.contact_number
    // });
    // const user = tiktokUsersModel.findOne({ contact_number: body.contact_number });
    return { user };


  } catch (error) {
    console.error('Error sending OTP:', error.message);
    throw new Error('Failed to send OTP');
  }

};


exports.isMemberExists = async (body) => {
  const user = await tiktokUsersModel.findOne({ contact_number: body.contact_number });
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
      first_commission: body.first_commission,
      second_commission: body.second_commission,
      third_commission: body.third_commission
    },
  })
}
