const { User } = require('../../database/models');

const getAll = async () => {
  const getUser = await User.findAll();
  return getUser;
};

const getOne = async (email) => {
  const OneUser = await User.findAll({ where: { email } });
  return OneUser;
};

const loginUser = async (email, password) => {
  const user = await User.findAll({ where: { email, password } });

  return user;
};

const createUser = async (name, email, password) => {
  const verifyUser = await getOne(email);
  if (verifyUser.length > 0) return { code: 400, message: 'user already exists'};

  const newUser = await User.create({ name, email, password });

  return newUser.dataValues;
};

module.exports = {
  getAll,
  loginUser,
  createUser,
};
