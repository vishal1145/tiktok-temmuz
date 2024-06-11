// Importing express module
const express = require("express");

const router = express.Router();

const {
  getUserById,
  getAllMembers,
  getEventsStaffUsers,
  updateContactImage,
  updatePassword,
  updateEmailPreferences,
  newEmailUpdate,
  newEmailVerifyOtp, getCreatorsEarningsGraph
} = require("../controllers/user.controller");
const { getPayments } = require('../controllers/payment.controller');
const { getCreatorsEarnings } = require("../controllers/excels.controller");
const { getAllMembersPublishers } = require("../controllers/publisher.controller");

router.get("/user-by-id", getUserById);
router.get("/get-all-members", getAllMembers);
router.post("/get-events-staff-users", getEventsStaffUsers);
router.post("/update-contact-image", updateContactImage)
router.post("/update-password", updatePassword)
router.post("/update-email-preferences", updateEmailPreferences);
router.post("/new-email-update", newEmailUpdate);
router.post("/new-email-verify-otp", newEmailVerifyOtp);
router.get("/get-all-members-publishers", getAllMembersPublishers);
router.get('/all-payments', getPayments);
router.post('/creators-earnings', getCreatorsEarnings);
router.get('/creators-earnings-graph', getCreatorsEarningsGraph);


module.exports = router;
