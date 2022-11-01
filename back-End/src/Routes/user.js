const { Router } = require('express');
const controller = require('../Controller');

const route = Router();

route.get('/', controller.getAll);
route.post('/create', controller.createUser);

module.exports = route;
