import { Request, Response } from 'express';
import ProductService from '../services/productServices';

export default class ProductController {
  constructor(private productService = new ProductService()) {

  }

  public getAll = async (_req: Request, res: Response) => {
    const getProduct = await this.productService.getAll();
    return res.status(200).json(getProduct);
  };
}