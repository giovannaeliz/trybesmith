import express from 'express';
import ProductController from './controllers/productController';
import validationProducts from './middlewares/validationProducts';

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
export default app;
