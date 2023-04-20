const httpStatus = require('../utils/httpStatus');

const { insertUser } = require('../services/user.service');

const insertNewUser = async (req, res) => {
    try {
        const { email, password, displayName, image } = req.body;
        const newUser = await insertUser(email, password, displayName, image);
        return res.status(httpStatus.CREATED).json({ token: newUser });
    } catch (err) {
        if (err.message === 'User already registered') {
            return res.status(httpStatus.CONFLICT).json({ message: err.message });
        }
        return res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
    }
};

module.exports = {
    insertNewUser,
};
