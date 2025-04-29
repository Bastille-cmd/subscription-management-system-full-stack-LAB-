const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Registration routes
router.get('/register', userController.getRegister);
router.post('/register', userController.postRegister);

// Login routes
router.get('/login', userController.getLogin);
router.post('/login', userController.postLogin);

// Logout route
router.get('/logout', userController.logout);

// User profile route
router.get('/profile', userController.getProfile);

module.exports = router;