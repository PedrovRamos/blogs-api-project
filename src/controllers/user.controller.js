const httpStatus = require('../utils/httpStatus');

const { insertUser, getAllUsers, getById } = require('../services/user.service');

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

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getById(id);
        return res.status(httpStatus.OK).json(user);
    } catch (err) {
        return res.status(httpStatus.NOT_FOUND).json({ message: err.message });
    }
};

module.exports = {
    insertNewUser,
    getUsers,
    getUserById,
};
