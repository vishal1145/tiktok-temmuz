const express = require("express");
const router = express.Router();

const {
  createPublisher,
  updatePublisherStatus,
  deletePublisher,
  getAllPublisher,
  updatePublisher,
  getCreator,
  getMember,
  canUpdatePublisher,
  creatorDetails
} = require("../controllers/publisher.controller");

router.post("/create", createPublisher);
router.post("/update-publisher-status/:id", updatePublisherStatus);
router.post("/delete/:id", deletePublisher);
router.post("/get-all", getAllPublisher);
router.post("/update/:id", updatePublisher);
router.post("/can-update", canUpdatePublisher);
router.get("/get-member", getMember);
router.get("/get-creator", getCreator);
router.post("/get-creator-details", creatorDetails);

module.exports = router;



