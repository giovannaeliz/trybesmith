// import { Products } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/productModel';
import { Products } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Products[]> {
    const data = await this.model.getAll();
    return data;
  }

  public async createProduct(product: Products): Promise<Products> {
    return this.model.create(product);
  }
}