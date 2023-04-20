const express = require('express');
const { insertNewUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/', insertNewUser);

module.exports = router;