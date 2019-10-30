import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';
import StudentController from './app/controller/StudentController';
import SessionController from './app/controller/SessionController';
import PlanoController from './app/controller/PlanoController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.use(authMiddleware);
routes.post('/cadastro', StudentController.store);
routes.put('/update', StudentController.update);
routes.post('/planos', PlanoController.store);
routes.get('/list-planos/:id', PlanoController.index);
routes.put('/update-planos', PlanoController.update);
routes.delete('/delete-planos', PlanoController.delete);

export default routes;
