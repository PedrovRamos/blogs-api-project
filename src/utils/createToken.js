const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJwt = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

function createToken(user) {
  const token = jwt.sign(user, secretKey, configJwt);
  console.log(token);
  return token;
}

module.exports = createToken;