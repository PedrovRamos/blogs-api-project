const express = require('express');
const { insertNewCategory } = require('../controllers/category.controller');
const { authToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', authToken, insertNewCategory);

module.exports = router;