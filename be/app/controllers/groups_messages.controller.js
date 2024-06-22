const {
  create,
  getGroupMessage,
  create_messages,get_all_messages
} = require("../services/groups_messages.services");

exports.createGroupMessage = async (req, res) => {
  try {
    const created = await create(req.body);
    res.json({ data: created, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create_messages = async (req, res) => {
  try {
    const created = await create_messages(req.body);
    res.json({ data: created, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.get_all_messages = async (req, res) => {
  try {
    const data = await get_all_messages(req.body.user_id);
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getGroupMessagesById = async (req, res) => {
  try {
    const messages = await getGroupMessage(req.query.groupId);
    res.json({ messages, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};