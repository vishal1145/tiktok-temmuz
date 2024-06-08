const commission = require('../models/commission.model');

// Create a new commission
exports.createCommission = async (req, res) => {
    try {
        // 
        await commission.deleteMany({});
        const commission_data = new commission(req.body);
        await commission_data.save();
        res.status(201).json(commission_data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all commission
exports.getAllCommission = async (req, res) => {
    try {
        const commissions = await commission.findOne();
        res.json(commissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateCommissionsById = async (req, res) => {
    try {
        const commission_data = await commission.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!commission_data) return res.status(404).json({ message: 'Commission not found' });
        res.json(commission_data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};