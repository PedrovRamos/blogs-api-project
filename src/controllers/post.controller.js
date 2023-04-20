const { getPosts } = require('../services/post.service');
const httpStatus = require('../utils/httpStatus');

const getAllPosts = async (req, res) => {
    try {
        const allPosts = await getPosts();
        res.status(200).json(allPosts);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).json({ message: error.message });
    }
};

module.exports = {
    getAllPosts,
};