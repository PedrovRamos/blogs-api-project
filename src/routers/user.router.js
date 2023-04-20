const express = require('express');
const { insertNewUser, getUsers, getUserById } = require('../controllers/user.controller');
const { authToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', insertNewUser);
router.get('/', authToken, getUsers);
router.get('/:id', authToken, getUserById);

module.exports = router;