const PublisherModel = require("../models/publisher.model");
const mongoose = require("mongoose");


exports.getAllPublisher = async () => {
  const publishers = await PublisherModel.find();
  return publishers;
};

exports.getAllUsersPublishers = async (_id) => {
  const publishers = await PublisherModel.aggregate([{ $match: { user_id: new mongoose.Types.ObjectId(_id) } }]);
  return publishers;
};

exports.createPublisher = async (user_body) => {
  const publisher = PublisherModel(user_body);
  const created = await publisher.save();
  return created;
}



exports.updatePublisherStatus = async (id, data) => {
  try {
    await PublisherModel.findByIdAndUpdate(id, {
      $set: {
        status: data.status,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}

exports.deletePublisher = async (id) => {
  const publisher = await PublisherModel.findById(id);
  if (publisher != null) {
    await PublisherModel.findByIdAndDelete(id);
    return { success: true, Messege: "Publisher Deleted !" };
  } else {
    return { success: false, Messege: "Publisher not found" };
  }

};
