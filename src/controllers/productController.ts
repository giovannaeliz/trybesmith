import { Request, Response } from 'express';
import ProductService from '../services/productServices';

export default class ProductController {
  constructor(private productService = new ProductService()) {

  }

  public getAll = async (_req: Request, res: Response) => {
    const getProduct = await this.productService.getAll();
    return res.status(200).json(getProduct);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const getProductCreated = await this.productService.createProduct(product);
    return res.status(201).json(getProductCreated);
  };
}