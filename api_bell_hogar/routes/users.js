const path = require('path');
const express = require('express');
const router = express.Router();
const apiUsersController = require('../controllers/apiUsersController');

router.get('/count', apiUsersController.usersCount);
router.get('/email', apiUsersController.usersEmail);
router.get('/:id', apiUsersController.usersDetail);

module.exports = router;