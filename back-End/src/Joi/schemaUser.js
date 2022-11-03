const Joi = require('joi');

const schemaUser = Joi.object({
  name: Joi.string().max(50).required().messages({
    'string.base': 'Name is need String',
    'any.required': 'Name is required',
  }),
  email: Joi.string().required().messages({
    'string.base': 'E-mail is need String',
    'any.required': 'E-mail is required',
  }),
  password: Joi.string.min(5).required().messages({
    'string.base': 'Password is need String',
    'any.required': 'Password is required',
  })
});

module.exports = schemaUser;
