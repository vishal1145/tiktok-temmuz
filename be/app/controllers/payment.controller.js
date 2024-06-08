const paymentService = require("../services/payment.service");

exports.createPayment = async (req, res) => {
  try {
    console.log("cerate payment");
    const payment = await paymentService.createPayment(req.body);
    res.status(200).json({ success: true, msg: "Payment Created"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPayments = async (req, res) => {
  try {
    const payments = await paymentService.getPayments(req.user._id);
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getOnlyUser = async (req, res) => {

  try {
    const publishers = await paymentService.getOnlyUser(req.body.user_id)
    console.log('publishers', publishers);
    if (publishers.length > 0) {
      res.status(200).send({ data: publishers, success: true })
    } else {
      res.status(200).send({ msg: 'No Record Found', success: true })
    }
  } catch(error) {
    res.status(400).send({msg: error.message});
  }
    
}


exports.getPaymentById = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const payment = await paymentService.updatePaymentStatus(req.params.id, req.body);
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json({ success: true, msg: "Payment Status Updated"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const result = await paymentService.deletePayment(req.params.id);
    if (!result.success) {
      return res.status(404).json({ message: result.message });
    }
    res.status(200).json({ message: result.message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
