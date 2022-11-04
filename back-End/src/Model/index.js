const { User } = require('../../database/models');

const getAll = async () => {
  const getUser = await User.findAll();
  console.log('Chegamos aquii eeeee');

  return getUser;
};

const getOne = async (email) => {
  const OneUser = await User.findAll({ where: { email } });
  return OneUser;
};

const createUser = async (name, email, password) => {
  console.log('verificando usuario');
  const verifyUser = await getOne(email);
  if (verifyUser.length > 0) return { code: 400, message: 'user already exists'};

  console.log('passamos pelo usuario');
  const newUser = await User.create({ name, email, password });

  return newUser;
}

module.exports = {
  getAll,
  createUser,
};
