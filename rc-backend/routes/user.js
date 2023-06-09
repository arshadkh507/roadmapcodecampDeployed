const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Signup route
router.post("/signup", userController.signup);

// Login route
router.post("/login", userController.login);

// Password reset request route
router.post("/reset-password/request", userController.requestPasswordReset);

// Password reset verify route
router.post("/reset-password/verify", userController.resetPassword);

// User get by email route
router.get("/:email", userController.getUserByEmail);

// User reset password in profile
router.post(
  "/userprofile/resetpassword",
  userController.userProfileResetPassword
);

// Logout User
router.delete("/userprofile/logout", userController.userLogout);

module.exports = router;

/* 

! password reset make one route 
// Password reset route
// router.post("/reset-password", userController.resetPassword);
*/
