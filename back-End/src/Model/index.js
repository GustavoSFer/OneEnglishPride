const { User } = require('../../database/models');

const getAll = async () => {
  const getUser = await User.findAll();
  console.log('Chegamos aquii eeeee');

  return getUser;
};

const createUser = async (name, email, password) => {
  const newUser = await User.create({ name, email, password });

  return newUser;
}

module.exports = {
  getAll,
}