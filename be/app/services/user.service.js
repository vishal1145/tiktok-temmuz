const UserModel = require("../models/tiktokusers.model");
const MemberModel = require("../models/tiktokusers.model");
const PublisherModel = require("../models/creator.model");
const newEmailUpdateModel = require("../models/new_email_update.model");
const ExcelDataModel = require("../models/excel_data.model");
const { decrypt, compare, sendForgetPasswordMail } = require("../util");

exports.getUserById = async (_id) => {
  return await MemberModel.findById(_id);
};

exports.getAllMembers = async () => {
  const users = await MemberModel.find({ role: "user" });
  return { users };
};


// exports.getEventsStaffUsers = async (type) => {
//   var query = { provider: true };
//   if(type) {
//    query.service_category =  { $elemMatch: { $eq: type } }
//   };
//   return await UserModel.find(    query,    { user_name: 1, bio: 1, image: 1, provider: 1 }    )
//     .populate("service_category")
//     .populate("location");
// };

exports.getEventsStaffUsers = async (type, page, pageSize) => {
  var query = { provider: true };
  const skip = (page - 1) * pageSize;
  if (type) {
    query.service_category = { $elemMatch: { $eq: type } };
  }
  const hireEvents = await UserModel.find(query, {
    user_name: 1,
    bio: 1,
    image: 1,
    provider: 1,

  })
    .populate("service_category")
    .populate("tags")
    .populate("location")
    .skip(skip)
    .limit(pageSize);
  const totalStaff = await UserModel.countDocuments(query, {
    user_name: 1,
    bio: 1,
    image: 1,
    provider: 1,

  });
  // const totalStaff = hireEvents.length;
  const totalPage = Math.ceil(totalStaff / pageSize);
  return { hireEvents, totalStaff, totalPage };
};

exports.updateContactImage = async (data) => {
  await UserModel.findByIdAndUpdate(data._id, {
    $set: {
      contact_number: data.contact_number,
      image: data.image,
    },
  });
  return { Message: "Data Updated" };
};

exports.updatePassword = async (data) => {
  const password = data.password;
  const user = await UserModel.findById(data.userId);
  if (user && (await compare(password, user.password))) {
    if (user) {
      const newPassword = await decrypt(data.newPassword);
      await UserModel.findByIdAndUpdate(data.userId, {
        $set: { password: newPassword },
      });
      return user;
    } else return null;
  } else return null;
};

exports.updateEmailPreferences = async (data) => {
  await UserModel.findByIdAndUpdate(data.userId, {
    $set: {
      preferences: data.preferences,
    },
  });
  return { Message: "Data Updated" };
};

exports.newEmailUpdate = async ({ newEmail, userId }) => {
  try {
    let { isSent, otp } = await sendForgetPasswordMail(
      newEmail,
      subject = "Send OTP for reset Email"
    );
    let requestData = {
      newEmail: newEmail,
      userId: userId,
      otp: otp,
    };
    if (isSent) {
      await newEmailUpdateModel.create(requestData);
      return { Messege: "OTP send" };
    } else {
      throw new Error({ Messege: "Failed to send" });
    }
  } catch (err) {
    throw new Error({ Messege: "Failed to send" });
  }
};

exports.newEmailVerifyOtp = async (data) => {
  try {
    const User = await newEmailUpdateModel.findOne({ userId: data.userId, newEmail: data.newEmail });

    if (User.otp === data.otp) {
      await UserModel.findByIdAndUpdate(User.userId, {
        $set: { email: data.newEmail },
      });
      return { Message: "Email Changed" };
    } else {
      throw new Error({ Message: "Otp Invalid" });
    }
  } catch (err) {
    throw new Error({ Message: "failed" });
  }
};

exports.getCreatorsEarningsGraph = async (_id) => {
  const creators = await PublisherModel.find({ user_id: _id });
  if (creators.length > 0) {
    const usernames = creators.map((e) => e.tiktok_username);
    const data = await ExcelDataModel.find({ creator_inf: { $in: usernames } });
    const dates = data.map((e) => e.as_of_date);
    const diamonds = data.map((e) => e.diamonds_this_month);

    let user = await UserModel.findById(_id);
    let first_commission = user.first_commission;
    let second_commission = user.second_commission;

    const earnings = data.map((d) => calculateEarning(first_commission, second_commission, d));
    return { dates, diamonds, earnings };
  } else {
    return "User do not have Creators";
  }
};

function calculateEarning(first_commission, second_commission, d) {
  var rate = first_commission;
  if (d.diamonds_this_month >= 200000) {
    rate = second_commission;
  }
  return rate * d.diamonds_this_month / 100;
}