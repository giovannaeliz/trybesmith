import { Pool } from 'mysql2/promise';
import { Orders } from '../interfaces';
import ProductModel from './productModel';

export default class OrderModel {
  public connection: Pool;

  public product: ProductModel;

  constructor(connection: Pool) {
    this.connection = connection;
    this.product = new ProductModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const query = 'SELECT * FROM Trybesmith.Orders';
    const [orders] = await this.connection.execute(query);
    const result = orders as Orders[];
    const productId = await this.product.getAll();
    const getOrders = result
      .map((order) => {
        const productsIds: Array<number> = [];
        productId
          .forEach((produtos) => produtos.orderId === order.id && productsIds.push(produtos.id));
        return { id: order.id, userId: order.userId, productsIds };
      });
      // quase choro com essa lógica
    return getOrders as unknown as Orders[];
  }
}