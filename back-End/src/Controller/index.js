const service = require('../Service');
// const { statusCodes } = require('../Util/enumStatusCode');

const getAll = async (req, res) => {
  const getUser = await service.getAll();

  return res.status(200).json(getUser);
};

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const newUser = await service.createUser(name, email, password);
  console.log('retornando do fluxo');
  console.log(newUser);
  if (newUser.code) return next(newUser);

  return res.status(201).json(newUser);
};

module.exports = {
  getAll,
  createUser,
}