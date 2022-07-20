import { Pool, ResultSetHeader } from 'mysql2/promise';
import generateJWT from '../generateJWT';
import { Users } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: Users): Promise<string> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = result;
    const token = generateJWT({ id: insertId, username, classe, level });
    return token;
  }
}