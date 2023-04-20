const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.number().integer().min(6).required(),
});

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.number().integer().min(6).required(),
  displayName: Joi.string().required(),
  image: Joi.string(),
});

module.exports = {
  loginSchema,
  userSchema,
};