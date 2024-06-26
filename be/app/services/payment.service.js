const Payment = require("../models/payment.model");
const User = require("../models/tiktokusers.model");
const mongoose = require("mongoose");

exports.createPayment = async (paymentData) => {
  const { amount, status, notes, user_id } = paymentData;
  const newPayment = new Payment({
    amount,
    status,
    notes,
    user_id
  });
  await newPayment.save();
  return newPayment;
};

exports.getPayments = async (_id) => {

  const user = await User.findById(_id);

  if (user.role == "admin") {
    return Payment.find().populate("user_id");
  } else if (user.role == "user") {
    const pipeline = [
      { $match: { user_id: new mongoose.Types.ObjectId(_id) } },
    ];
    return Payment.aggregate(pipeline);
  }
};


exports.getOnlyUser = async (_id) => {
  const publishers = await Payment.aggregate([{ $match: { user_id: new mongoose.Types.ObjectId(_id) } }]);
  const approved_payment = publishers.filter((e) => e.status == "Approved");
  const total_withdraw = approved_payment.reduce((accumulator, item) => accumulator + item.amount, 0);
  return { publishers, total_withdraw };
};



exports.getPaymentById = async (id) => {
  const payment = await Payment.findById(id);
  return payment;
};

exports.updatePaymentStatus = async (id, body) => {
  const payment = await Payment.findByIdAndUpdate(id, {
    $set: {
      status: body.status,
      reason: body.reason
    }
  });
  return payment;
};

exports.deletePayment = async (id) => {
  const payment = await Payment.findByIdAndDelete(id);
  if (!payment) {
    return { success: false, message: "Payment not found" };
  }
  return { success: true, message: "Payment deleted successfully" };
};
