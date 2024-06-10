const {
  getExcels,getCreatorsEarnings
} = require("../services/excel.services");

exports.getExcels = async (req, res) => {
  try {
    const excels = await getExcels();
    res.status(200).send({ data: excels, success: true });
  } catch (err) {
    res.status(400).send({ Message: err });
  }
};

exports.getCreatorsEarnings = async (req, res) => {
  try {
    const earnings = await getCreatorsEarnings(req.user._id);
    res.status(200).send({ data: earnings, success: true });
  } catch (err) {
    res.status(400).send({ Message: err.Message });
  }
};

