const service = require('../Service');

const getAll = async (req, res) => {
  const getUser = await service.getAll();

  return res.status(200).json(getUser);
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const login = await service.loginUser(email, password);
  if (login.code) return next(login);

  res.status(200).json(login);
};

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  
  const newUser = await service.createUser(name, email, password);
  if (newUser.code) return next(newUser);

  return res.status(201).json(newUser);
};

module.exports = {
  getAll,
  loginUser,
  createUser,
};
