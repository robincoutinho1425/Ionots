const express = require('express');
const { assignProject } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { registerUser } = require('../controllers/userController');
const { loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/assign-project', authMiddleware, assignProject); // Only authorized users can assign projects

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

module.exports = router;
