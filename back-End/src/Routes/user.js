const { Router } = require('express');
const controller = require('../Controller');

const route = Router();

route.get('/', controller.loginUser);
route.post('/create', controller.createUser);

module.exports = route;
