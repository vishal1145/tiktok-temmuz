const UserModel = require('../models/user.model'); // it is not use
const MemberModel = require('../models/tiktokusers.model');
const CreatorModel = require('../models/creator.model');
const PaymentModel = require('../models/payment.model');

const { decrypt, compare, sendForgetPasswordMail } = require('../util')

exports.register = async (user_body) => {
    const password = await decrypt(user_body.password);
    if (!user_body.location) {
        delete user_body.location;
    }
    const user = new UserModel({
        ...user_body,
        email: user_body.email.toLowerCase(),
        password
    });
    const created = await user.save()
    return { created }
}

exports.login = async ({ user_name, password }) => {
    const user = await UserModel.findOne({ $or: [{ email: user_name.toLowerCase() }, { user_name }] })
    if (user && (await compare(password, user.password)))
        return user;
    else return null;
}

exports.forgetPassword = async ({ email }) => {
    try {
        let { isSent, otp } = await sendForgetPasswordMail(email);
        if (isSent) {
            await UserModel.updateOne({ email: email }, { $set: { otp: otp } });
            return { Messege: "OTP send" };
        } else {
            throw new Error({ Messege: "Failed to send" })
        }
    } catch (err) {
        throw new Error({ Messege: "Failed to send" })
    }
};

exports.verifyOtp = async (data) => {
    try {
        const User = await MemberModel.findOne({ contact_number: data.contact_number });

        if (User.otp == data.otp) {
            return ({ User })
        } else {
            throw new Error({ Message: "Otp Invalid" })
        }

    } catch (err) {
        throw new Error({ Message: "failed" })
    }
}

exports.checkUserName = async (data) => {
    try {
        const user_name = await UserModel.findOne({ user_name: data.user_name });
        if (user_name) {
            return user_name;
        }
    } catch (err) {
    }
}

exports.getUserById = async (_id) => {
    const user = MemberModel.findById(_id);
    return user;
}

exports.updatePassword = async (data) => {
    const password = data.newPassword;
    const user = await UserModel.findOne({ email: data.email });
    if (user) {
        const newPassword = await decrypt(password);
        await UserModel.findByIdAndUpdate(user._id, {
            $set: { password: newPassword },
        });
        return true;
    } else return false;
};

exports.dashBoardCount = async () => {
    const membes = await MemberModel.count({ role: 'user' });
    const creators = await CreatorModel.count();
    const payment_request = await PaymentModel.count();
    return { membes, creators, payment_request }
};
