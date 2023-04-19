const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.number().integer().min(6).required(),
});

module.exports = {
  loginSchema,
};