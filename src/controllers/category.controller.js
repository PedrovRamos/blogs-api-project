const httpStatus = require('../utils/httpStatus');
const { insertCategory, getAllCategories } = require('../services/category.service');

const insertNewCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = await insertCategory(name);
        console.log(newCategory);
        return res.status(httpStatus.CREATED).json(newCategory);
    } catch (err) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
    }
};

const getCategories = async (req, res) => {
    const allCategories = await getAllCategories();
    return res.status(httpStatus.OK).json(allCategories);
};

module.exports = {
    insertNewCategory,
    getCategories,
};