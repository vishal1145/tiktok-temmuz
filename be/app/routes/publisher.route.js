const express = require("express");
const router = express.Router();

const {
  createPublisher,
  updatePublisherStatus,
  deletePublisher
} = require("../controllers/publisher.controller");

router.post("/create", createPublisher);
router.post("/update-publisher-status/:id", updatePublisherStatus);
router.post("/delete/:id", deletePublisher);

module.exports = router;



