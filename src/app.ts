import express from 'express';
import ProductController from './controllers/productController';
// import * as validationProducts from './middlewares/validationProducts';

const app = express();
const productController = new ProductController();
app.use(express.json());
app.get('/products', productController.getAll);
app.post(
  '/products',
  // validationProducts,
  productController.create,
);
export default app;
