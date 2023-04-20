const { Category } = require('../models');
const createToken = require('../utils/createToken');

const insertCategory = async (name) => {
    if (!name) { throw new Error('"name" is required'); }

    const category = await Category.create({ name });
    createToken({ name });
    return category;
};

module.exports = { insertCategory };