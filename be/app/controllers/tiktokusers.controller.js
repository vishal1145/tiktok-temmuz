const {
  tiktokLogin,
} = require("../services/tiktokusers.service");

exports.tiktokLogin = async (req, res) => {
  try {
    await tiktokLogin(req.body);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
