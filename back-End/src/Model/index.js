const { User } = require('../../database/models');

const getAll = async () => {
  const getUser = await User.findAll();
  console.log('Chegamos aquii eeeee');

  return getUser;
};

module.exports = {
  getAll,
}