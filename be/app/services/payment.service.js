const Payment = require("../models/payment");
const mongoose = require("mongoose");

exports.createPayment = async (paymentData) => {
  const { user_name, request_date, amount, status, notes, action, user_id } = paymentData;
  const newPayment = new Payment({
    user_name,
    request_date,
    amount,
    status,
    notes,
    action,
    user_id
  });
  await newPayment.save();
  return newPayment;
};

exports.getPayments = () => {
    return Payment.find();
  };


  exports.getOnlyUser = async (_id) => {
    const publishers = await Payment.aggregate([{ $match: { user_id: new mongoose.Types.ObjectId(_id) } }]);
    return publishers;
  };
  
  

exports.getPaymentById = async (id) => {
  const payment = await Payment.findById(id);
  return payment;
};

exports.updatePayment = async (id, updateData) => {
  const { user_name, request_date, amount, status, notes, action } = updateData;
  const payment = await Payment.findByIdAndUpdate(
    id,
    {
      user_name,
      request_date,
      amount,
      status,
      notes,
      action,
    },
    { new: true }
  );
  return payment;
};

exports.deletePayment = async (id) => {
  const payment = await Payment.findByIdAndDelete(id);
  if (!payment) {
    return { success: false, message: "Payment not found" };
  }
  return { success: true, message: "Payment deleted successfully" };
};
