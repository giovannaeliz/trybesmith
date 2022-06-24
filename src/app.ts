import express from 'express';
import ProductController from './controllers/productController';

const app = express();
const productController = new ProductController();
app.use(express.json());
app.get('/products', productController.getAll);
app.post('/products', productController.create);
export default app;
