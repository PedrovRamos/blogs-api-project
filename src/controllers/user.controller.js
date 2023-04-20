const httpStatus = require('../utils/httpStatus');

const { insertUser, getAllUsers } = require('../services/user.service');

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

const getUsers = async (_req, res) => {
    const allUsers = await getAllUsers();
    return res.status(httpStatus.OK).json(allUsers);
};

module.exports = {
    insertNewUser,
    getUsers,
};
