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
    const token = generateJWT({ id: insertId, username });
    return token;
  }

  public async getAll(): Promise<Users[]> {
    const query = 'SELECT * FROM Trybesmith.Users';
    const [users] = await this.connection.execute(query);
    return users as Users[];
  }

  public async getById(id: number, username: string) {
    const result = await this.connection.execute(
      `SELECT id, username FROM Trybesmith.Users
      WHERE id=? AND username=?;`,
      [id, username],
    );
    // console.log('aqui');
    const [insert] = result;
    const json = JSON.stringify(insert);
    const array = JSON.parse(json);
    return array;
  }
}