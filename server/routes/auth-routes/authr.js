const express = require('express');
const { Registeruser, Loginuser, Logoutuser, checkAuth } = require('../../controllers/auth-controller/auth-controller');

const router = express.Router();

router.post('/register', Registeruser);  // Ensure function exists
router.post('/login', Loginuser);  // Ensure function exists
router.post('/logout', Logoutuser);  // Ensure function exists
router.get('/check-auth', checkAuth);  // Ensure function exists

module.exports = router;
