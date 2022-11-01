const model = require('../Model');
const md5 = require('md5');

const getAll = async () => {
  const getUser = await model.getAll();

  return getUser;
};

const createUser = async (name, email, password) => {

  const bufferPassword = md5(password);
  const newUser = await model.createUser(name, email, bufferPassword);

  return newUser;
};

module.exports = {
  getAll,
  createUser,
};
