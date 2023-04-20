const express = require('express');
const { insertNewCategory, getCategories } = require('../controllers/category.controller');
const { authToken } = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', authToken, insertNewCategory);
router.get('/', authToken, getCategories);

module.exports = router;