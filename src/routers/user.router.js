const express = require('express');
const { insertNewUser, getUsers } = require('../controllers/user.controller');
const { authToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', insertNewUser);
router.get('/', authToken, getUsers);

module.exports = router;