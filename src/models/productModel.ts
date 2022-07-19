import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Products } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // Products[] é um tipo que é array de produtos
  public async getAll(): Promise<Products[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await this.connection.execute(query);
    return products as Products[];
  }

  public async create(product: Products): Promise<Products> {
    const { name, amount } = product;
    // ResultSetHeader é uma propriedade do connection.execute
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsertId] = result;
    const { insertId } = dataInsertId;
    const productCreated = {
      id: insertId,
      name,
      amount,
    };
    return productCreated;
  }
}