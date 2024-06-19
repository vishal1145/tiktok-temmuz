const { register, login, forgetPassword, verifyOtp, checkUserName, getUserById, updatePassword, dashBoardCount } = require('../services/auth.service');
const { getToken } = require('../util')

exports.register = async (req, res, next) => {
    try {
        const { created } = await register(req.body)
        if (created) {
            res.send({ success: true, access_token: getToken(created) })
        } else {
            res.status(400).send({ message: "Invalid request" })
        }
    } catch (err) {
        res.status(400).send({ message: "Bad request" })
    }
}


exports.login = async (req, res, next) => {
    try {
        const user = await login(req.body);
        if (user) {
            res.status(200).send({ success: true, access_token: getToken(user), user_id: user._id, role: user.role })
        } else {
            res.status(404).send({ message: "Invalid user" })
        }
    } catch (err) {
        res.status(400).send({ message: "Bad request" })
    }
}

exports.checkUserName = async (req, res) => {
    try {
        const user_name = await checkUserName(req.body)
        if (user_name) {
            res.status(500).send({ message: "is exists already 😌" })
        } else {
            res.status(200).send({ message: "😀" })
        }
    } catch (err) {

    }
}

exports.forgetPassword = async (req, res, next) => {
    try {
        const response = await forgetPassword(req.body)
        res.status(200).json({ Message: "OTP sent" });
    } catch (err) {
        res.status(500).json({ Message: "Failed to send" });
    }
};

exports.verifyOtp = async (req, res) => {
    try {
        let requestData = {
            contact_number: req.body.contact_number,
            otp: req.body.otp
        }

        const { User } = await verifyOtp(requestData);

        res.status(200).json({ Message: "OTP Matched", success: true, user_id: User._id, role: User.role, access_token: getToken(User), })

    } catch (err) {
        res.status(401).json({ Message: "Otp Invalid", success: false })
    }
};

exports.getUserById = async (req, res) => {
    try {
        const users = await getUserById(req.params.id)
        res.status(200).json({ data: users, success: true })

    } catch (err) {
        res.status(404).json({ Message: err.message, success: false })
    }
};

exports.updatePassword = async (req, res) => {
    try {
        let requestData = {
            email: req.body.email,
            newPassword: req.body.new_password,
        };

        const response = await updatePassword(requestData);
        if (response) res.status(200).json({ Message: "Password  Updated", success: true });
        else res.status(404).json({ Message: "User not found", success: false });
    } catch (error) {
        res.status(400).send({ Messege: error.message });
    }
};

exports.dashBoardCount = async (req, res) => {
    try {
        const { membes, creators, payment_request, pending_creators } = await dashBoardCount();
        res.status(200).json({ success: true, membes: membes, creators: creators, payment_request: payment_request, pending_creators: pending_creators });
    } catch (error) {
        res.status(400).send({ Messege: error.message });
    }

}