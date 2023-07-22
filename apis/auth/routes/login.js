// apis/auth/routes/login.js

const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Login endpoint
router.post('/login', loginController.login);

module.exports = router;
