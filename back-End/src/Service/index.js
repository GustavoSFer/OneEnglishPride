const model = require('../Model');
const md5 = require('md5');
const schemaUser = require('../Joi/schemaUser');
const statusCodeError = require('../Joi/statusCodeError');
const { generateToken } = require('../Token/token');

const getAll = async () => {
  const getUser = await model.getAll();

  return getUser;
};

const createUser = async (name, email, password) => {
  try {
    await schemaUser.validateAsync({ name, email, password });
    const hashPassword = md5(password);

    const newUser = await model.createUser(name, email, hashPassword);
    if (newUser.code) return newUser;
    
    const token = generateToken({ name, email });
    delete newUser.password;
    return {...newUser, token};

  } catch(e) {

    const code = statusCodeError(e.details[0].type);
    return { code, message: e.details[0].message };
  }
};

module.exports = {
  getAll,
  createUser,
};
