const {
  getExcels,
} = require("../services/excel.services");

exports.getExcels = async (req, res) => {
  try {
    const excels = await getExcels();
    res.status(200).send({ data: excels, success: true });
  } catch (err) {
    res.status(400).send({ Message: err });
  }
};

