const {
  tiktokLogin,
  isMemberExists
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
