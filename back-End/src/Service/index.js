const model = require('../Model');

const getAll = async () => {
  const getUser = await model.getAll();

  return getUser;
};

module.exports = {
  getAll,
}