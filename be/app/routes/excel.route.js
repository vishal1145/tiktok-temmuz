const express = require("express");
const router = express.Router();
const { getExcels } = require("../controllers/excels.controller");


router.get('/', getExcels);

module.exports = router;