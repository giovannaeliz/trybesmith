import connection from '../models/connection';
import UserModel from '../models/userModel';
import { Login, Users } from '../interfaces';

export default class UserServices {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: Users): Promise<string> {
    return this.model.create(user);
  }

  public async loginUser(login: Login): Promise<Users | undefined> {
    const getUser = await this.model.getAll();
    const compare = getUser
      .find((user: Users) => user.username === login.username && user.password === login.password);
    return compare;
  }
}