import express from 'express';
import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import OrderController from './controllers/orderController';
import validationProducts from './middlewares/validationProducts';
import validationUsers from './middlewares/validationUsers';

const app = express();
const productController = new ProductController();

app.use(express.json());
app.get('/products', productController.getAll);
// o middlewere obrigatoriamente precisa estar dentro de uma rota
app.post(
  '/products',
  validationProducts.validationName,
  validationProducts.validationAmount,
  productController.create,
);
const userController = new UserController();
app.post(
  '/users',
  validationUsers.validationUserName,
  validationUsers.validationClasse,
  validationUsers.validationLevel,
  validationUsers.validationPassword,
  userController.create,
);

const orderController = new OrderController();
app.get('/orders', orderController.getAll);
export default app;
