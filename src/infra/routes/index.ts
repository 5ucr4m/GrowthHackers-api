import { Router } from 'express';

import SessionController from '@modules/users/controllers/SessionController';
import UsersControllers from '@modules/users/controllers/UsersControllers';

const sessionController = new SessionController();
const usersControllers = new UsersControllers();

import authMiddleware from '../middleware/authMiddleware';

const routes = Router();

routes.post('/users', usersControllers.create);
routes.post('/session', sessionController.create);

routes.use(authMiddleware);

export default routes;
