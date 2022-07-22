import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import { Orders } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const data = await this.model.getAll();
    return data;
  }
}