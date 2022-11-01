const service = require('../Service');

const getAll = async (req, res) => {
  const getUser = await service.getAll();

  return res.status(200).json(getUser);
};

module.exports = {
  getAll,
}