const Joi = require('joi');

const schemaLogin = Joi.object({
  email: Joi.string().required().messages({
    'string.base': 'E-mail is need String',
    'any.required': 'E-mail is required',
  }),
  password: Joi.string().min(5).required().messages({
    'string.base': 'Password is need String',
    'any.required': 'Password is required',
  })
});

module.exports = schemaLogin;
