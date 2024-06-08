const express = require('express');
const userController = require('../controllers/commission.controller');

const router = express.Router();

router.post('/', userController.createCommission);
router.get('/', userController.getAllCommission);
// router.put('/:id', userController.updateCommissionById);

module.exports = router;
