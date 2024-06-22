const GroupMessagesModel = require("../models/groups_messages.model");
const MessagesModel = require("../models/message.model");


exports.create = async (messages) => {
  return await GroupMessagesModel.create(messages);
};

exports.getMessageById = async (messageId) => {
  return await GroupMessagesModel.findById(messageId)
    .populate("groupId")
    .populate("senderId");
};
exports.createOffer = async (offer) => {
  return await GroupMessagesModel.create(offer);
}

exports.getGroupMessage = async (groupId) => {
  return await GroupMessagesModel.find(
    { groupId },
  )
    .populate("groupId")
    .populate("senderId")
    .populate("eventId");
};

exports.updateOffer = async (group) => {
  const update = await GroupMessagesModel.findByIdAndUpdate(group._id, {
    $set: {
      action_performed: group.action_performed,
      action: group.action,
    },
  });

  return update;

}

exports.create_messages = async (messages) => {
  return await MessagesModel.create(messages);
};

exports.get_all_messages = async (user_id) => {
  let msg = await MessagesModel.find();

  if (user_id) {
    msg = await MessagesModel.find({ target_id: { $in: [user_id] } })
  } 
  return msg;
};