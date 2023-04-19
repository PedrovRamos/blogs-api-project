const { User } = require('../models');
const createToken = require('../utils/createToken');

const authenticate = async (email, password) => {
    // const token = createToken(user);
    // console.log(token)
    if (email === '' || password === '') { throw new Error('Some required fields are missing'); }
    const user = await User.findOne({
        where: { email, password },
    });
    if (!user) { throw new Error('Invalid fields'); }

    const token = createToken(user.dataValues);
    return token;
};

module.exports = { authenticate };