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
  users.forEach(e => {
    e.first_commission = Math.floor(e.first_commission * 100);
    e.second_commission = Math.floor(e.second_commission * 100);
    e.third_commission = Math.floor(e.third_commission * 100);
  });
  return { users };
};

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
  let creators = await PublisherModel.find();
  if (_id) {
    creators = await PublisherModel.find({ user_id: _id });
  }
  //const creators = await PublisherModel.find({ user_id: _id });
  if (creators.length > 0) {
    const usernames = creators.map((e) => e.tiktok_username);
    const data = await ExcelDataModel.find({ creator_inf: { $in: usernames } });
    data.sort((a, b) => new Date(a.as_of_date) - new Date(b.as_of_date));

    const dateMap = new Map();

    let allUsers = await UserModel.find();
   
    data.forEach(item => {

      let creator = creators.find((u) => u._id == item.creator_id);

      let user = allUsers.find((e)=> e._id.toString() === creator.user_id.toString());

      let first_commission = user.first_commission;
      let second_commission = user.second_commission;
      let third_commission = user.third_commission;

      const date = item.as_of_date;
      const diamonds = parseInt(item.diamonds_this_month);
      const earnings = calculateEarning(first_commission, second_commission, third_commission, item);

      if (dateMap.has(date)) {
        const existing = dateMap.get(date);
        existing.diamonds += diamonds;
        existing.earnings += earnings;
        dateMap.set(date, existing);
      } else {
        dateMap.set(date, { diamonds, earnings });
      }
    });

    const uniqueData = data.filter((item, index) => {
      if (dateMap.has(item.as_of_date)) {
        if (index === data.findIndex(i => i.as_of_date === item.as_of_date)) {
          const dateData = dateMap.get(item.as_of_date);
          item.diamonds_this_month = dateData.diamonds.toString();
          item.earnings = dateData.earnings;
          return true;
        }
        return false;
      }
      return false;
    });

    const allDates = uniqueData.length === 0 ? [] : uniqueData.map((e) => e.as_of_date);
    const totalDiamonds = uniqueData.length === 0 ? [] : uniqueData.map((e) => e.diamonds_this_month);
    const totalEarnings = uniqueData.length === 0 ? [] : uniqueData.map((e) => e.earnings)

    return { allDates, totalDiamonds, totalEarnings };
  } else {
    return "User do not have Creators";
  }
};

function calculateEarning(first_commission, second_commission, third_commission, d) {
  var rate = first_commission;
  if (d.diamonds_this_month >= 300000 && d.diamonds_this_month < 500000) {
    rate = second_commission;
  }
  if (d.diamonds_this_month >= 500000) {
    rate = third_commission;
  }
  let earn = rate * d.diamonds_this_month / 100;
  return earn.toFixed(2);
}