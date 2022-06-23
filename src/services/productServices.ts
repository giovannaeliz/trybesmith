// import { Products } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/productModel';
import { IdProducts } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IdProducts[]> {
    const data = await this.model.getAll();
    return data;
  }
}