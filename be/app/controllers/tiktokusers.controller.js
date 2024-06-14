const {
  tiktokLogin,
  isMemberExists,
  memberDelete,
  memberUpdate,
  memberUpdateProfile,
  memberUpdateCommission,
  resendOtp
} = require("../services/tiktokusers.service");
const { getToken } = require('../util')


exports.tiktokLogin = async (req, res) => {
  try {
    const { user } = await tiktokLogin(req.body);
    if (user) {
      res.status(200).send({ success: true });
    } else {
      res.status(400).send({ message: "Invalid request" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.isMemberExists = async (req, res) => {
  try {
    const { user } = await isMemberExists(req.body);
    if (user) {
      res.send({ success: true, isMemberExists: true });
    } else {
      res.send({ success: true, isMemberExists: false });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

exports.memberDelete = async (req, res) => {
  try {
    await memberDelete(req.params.id);
    res.status(200).json({ success: true, msg: 'user deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.memberUpdate = async (req, res) => {
  try {
    await memberUpdate(req.body);
    res.status(200).json({ success: true, msg: 'user updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.memberUpdateProfile = async (req, res) => {
  try {
    await memberUpdateProfile(req.body);
    res.status(200).json({ success: true, msg: 'User Profile Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.memberUpdateCommission = async (req, res) => {
  try {
    await memberUpdateCommission(req.body);
    res.status(200).json({ success: true, msg: 'User Commission Updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.resendOtp = async (req, res) => {
  try {
    await resendOtp(req.body.contact_number);
    res.status(200).json({ success: true, msg: 'OTP sent 😊' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

