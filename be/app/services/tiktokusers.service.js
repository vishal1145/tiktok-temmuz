const tiktokUsersModel = require("../models/tiktokusers.model");
const otpGenerator = require("otp-generator");

exports.tiktokLogin = async (body) => {
  var user = await tiktokUsersModel.findOne({contact_number: body.contact_number });
  if (!user) {
    user = new tiktokUsersModel(body);
    await user.save();
  }

  const otp = otpGenerator.generate(4, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  await tiktokUsersModel.findOneAndUpdate({ contact_number: body.contact_number}, {otp: '123456'})

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
