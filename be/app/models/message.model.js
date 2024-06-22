const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  sender_id: { type: String },
  target_id: [{ type: String }],
  for_all: { type: Boolean },
});

module.exports = mongoose.model("message", messageSchema);
