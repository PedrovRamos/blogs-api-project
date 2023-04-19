const httpStatus = require('../utils/httpStatus');

const { authenticate } = require('../services/login.service');

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await authenticate(email, password);
    return res.status(httpStatus.OK).json({ token: login });
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: err.message });
  }
};

module.exports = {
  signin,
};
