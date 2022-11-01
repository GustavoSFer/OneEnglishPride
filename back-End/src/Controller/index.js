const service = require('../Service');
const { statusCodes } = require('../Util/enumStatusCode');

const getAll = async (req, res) => {
  const getUser = await service.getAll();

  return res.status(200).json(getUser);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await service.createUser(name, email, password);

  return res.status(201).json(newUser);
};

module.exports = {
  getAll,
  createUser,
}