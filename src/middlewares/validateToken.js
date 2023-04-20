const httpStatus = require('../utils/httpStatus');

const { validateToken } = require('../services/validations/auth');

const authToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const tokenCheck = validateToken(authorization);
        req.user = tokenCheck;
        if (tokenCheck.error && tokenCheck.error.code === 'tokenNotFound') {
            return res.status(401)
                .json({ message: tokenCheck.error.message });
        }
        next();
    } catch (err) {
        return res.status(httpStatus.UNAUTHORIZED_RESPONSE)
            .json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    authToken,
};