
// Importing express module
const express = require("express")
const router = express.Router()

const { register, login, forgetPassword, verifyOtp, checkUserName, getUserById, updatePassword, dashBoardCount } = require('../controllers/auth.controller');
const { validateUserOnRegistration, validateUserOnLogin } = require('../validators/user')
const { tiktokLogin, isMemberExists, memberDelete, memberUpdate, memberUpdateProfile, memberUpdateCommission, resendOtp, topFiveDiamondsMembersMonth, topFiveEarningsMembersMonth, topFiveCreatorsDiamondsMonth, topFiveMembersMostCreators } = require('../controllers/tiktokusers.controller');
const { verifyRegister, checkEmailExists } = require('../middleware/auth')

// validateUserOnRegistration
router.post("/register", verifyRegister, register)
router.post("/login", validateUserOnLogin, login)
router.post("/tiktok-login", tiktokLogin)
router.post("/forget-password", checkEmailExists, forgetPassword);
router.post("/check-user-name", checkUserName);
router.post("/update-password", updatePassword);

router.post("/verify-otp", verifyOtp);
router.get("/user/:id", getUserById);

router.post("/check-member-exists", isMemberExists)
router.get("/member-delete/:id", memberDelete)
router.post("/member-update", memberUpdate);
router.post("/member-update-profile", memberUpdateProfile);
router.post("/member-update-commission", memberUpdateCommission);
router.get("/dashboard-count", dashBoardCount);
router.post("/resend-otp", resendOtp);
router.get("/top-five-diamonds-members-month", topFiveDiamondsMembersMonth);
router.get("/top-five-earnings-members-month", topFiveEarningsMembersMonth);
router.get("/top-five-creators-most-diamonds-month", topFiveCreatorsDiamondsMonth);
router.get("/top-five-members-most-creators", topFiveMembersMostCreators);

module.exports = router