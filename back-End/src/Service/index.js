const model = require('../Model');
const md5 = require('md5');
const schemaUser = require('../Joi/schemaUser');
const statusCodeError = require('../Joi/statusCodeError');

const getAll = async () => {
  const getUser = await model.getAll();

  return getUser;
};

const createUser = async (name, email, password) => {
  try {
    await schemaUser.validateAsync({ name, email, password });
    const hashPassword = md5(password);
    const newUser = await model.createUser(name, email, hashPassword);

    return newUser;

  } catch(e) {

    const code = statusCodeError(e.details[0].type);
    return { code, message: e.details[0].message };
  }
};

module.exports = {
  getAll,
  createUser,
};
