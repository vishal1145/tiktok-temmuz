// Importing express module
const express = require("express");

const router = express.Router();

const {
  getUserById,
  getAllUsers,
  getEventsStaffUsers,
  updateContactImage,
  updatePassword,
  updateEmailPreferences,
  newEmailUpdate,
  newEmailVerifyOtp,
} = require("../controllers/user.controller");

router.get("/user-by-id", getUserById);
router.get("/get-all-users", getAllUsers);
router.post("/get-events-staff-users", getEventsStaffUsers);
router.post("/update-contact-image", updateContactImage)
router.post("/update-password", updatePassword)
router.post("/update-email-preferences", updateEmailPreferences);
router.post("/new-email-update", newEmailUpdate);
router.post("/new-email-verify-otp", newEmailVerifyOtp);



module.exports = router;
