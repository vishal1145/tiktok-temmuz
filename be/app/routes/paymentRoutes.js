const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');

router.post('/payments', paymentController.createPayment);
router.get('/payments/:id', paymentController.getPaymentById);
router.post('/update-payment-status/:id', paymentController.updatePaymentStatus);
router.delete('/payments/:id', paymentController.deletePayment);

router.post("/payment_user", paymentController.getOnlyUser);



module.exports = router;
