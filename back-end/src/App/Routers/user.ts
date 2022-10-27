import { Router } from 'express';
import controller from '../controller';

const route = Router();

route.post('/', controller.createUser);

export default route;
