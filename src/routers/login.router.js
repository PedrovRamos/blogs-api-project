const express = require('express');
const { signin } = require('../controllers/login.controller');

const router = express.Router();

router.post('/', signin);

module.exports = router;