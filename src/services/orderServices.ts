import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import { Orders } from '../interfaces';
import ProductModel from '../models/productModel';

export default class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const data = await this.model.getAll();
    return data;
  }

  public async create(userId: number, productsIds: number[]): Promise<{
    userId: number, productsIds: number[]
  }> {
    return this.model.createOrder(userId, productsIds);
  }
}