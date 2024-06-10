const PublisherModel = require("../models/creator.model");

const mongoose = require("mongoose");

// admin case
exports.getAllPublisher = async () => {
  const publishers = await PublisherModel.find().populate('user_id');
  return publishers;
};

exports.getAllMembersPublishers = async (_id) => {
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
        reason: data.reason
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
exports.updatePublisher = async (id, data) => {
  try {
    await PublisherModel.findByIdAndUpdate(id, {
      $set: {
        first_name: data.first_name,
        last_name: data.last_name,
        tiktok_username: data.tiktok_username,
        contact_number: data.contact_number,
        agency_center_code: data.agency_center_code,
        icon: data.icon
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

exports.deletePublisher = async (id) => {
  const publisher = await PublisherModel.findById(id);
  if (publisher != null) {
    await PublisherModel.findByIdAndDelete(id);
    return { success: true, Messege: "Publisher Deleted !" };
  } else {
    return { success: false, Messege: "Publisher not found" };
  }

};
