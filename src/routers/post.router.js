const express = require('express');
const { getAllPosts } = require('../controllers/post.controller');
const { authToken } = require('../middlewares/validateToken');

const router = express.Router();

router.get('/', authToken, getAllPosts);

module.exports = router;