const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const validateToken = (token) => {
  if (!token) {
    return {
      error: {
        code: 'tokenNotFound',
        message: 'Token not found',
      },
    };
  }

  const isValid = jwt.verify(token, secretKey);
  return isValid;
};

module.exports = {
  validateToken,
};