const validateEmail = require('../utils/validateEmail');
const { User } = require('../models');
const createToken = require('../utils/createToken');

const insertUser = async (email, password, displayName, image) => {
  if (displayName.length < 8) {
    throw new Error('"displayName" length must be at least 8 characters long');
  }
  if (!validateEmail(email)) { throw new Error('"email" must be a valid email'); }
  if (password.length < 6) {
    throw new Error('"password" length must be at least 6 characters long');
  }

  const user = await User.findOne({
    where: { email, password },
  });

  if (user) { throw new Error('User already registered'); }

  await User.create({ displayName, email, password, image });

  const token = createToken({ displayName, email, password, image });
  return token;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll(
    {
      attributes: { exclude: ['password'] },
    },
  );
  return allUsers;
};

module.exports = { insertUser, getAllUsers };