const express = require("express");
const router = express.Router();

const {
  createPublisher,
  updatePublisherStatus,
  deletePublisher,
  getAllPublisher,
  updatePublisher,
  getCreator
} = require("../controllers/publisher.controller");

router.post("/create", createPublisher);
router.post("/update-publisher-status/:id", updatePublisherStatus);
router.post("/delete/:id", deletePublisher);
router.get("/get-all", getAllPublisher);
router.post("/update/:id", updatePublisher);
router.get("/get-creator", getCreator);

module.exports = router;



