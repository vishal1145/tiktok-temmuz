const express = require("express");
const router = express.Router();

const {
  createGroupMessage,
  getGroupMessagesById,
  create_messages,get_all_messages
} = require("../controllers/groups_messages.controller");

router.post("/", createGroupMessage);
router.get("/messages", getGroupMessagesById);
router.post("/create", create_messages);
router.post("/all-messages", get_all_messages);

module.exports = router;
