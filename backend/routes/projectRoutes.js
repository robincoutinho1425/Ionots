const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, createProject); // Only authorized users can create a project
router.get('/', authMiddleware, getProjects); // Only authorized users can view projects

module.exports = router;
