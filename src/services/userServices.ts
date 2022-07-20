import connection from '../models/connection';
import UserModel from '../models/userModel';
import { Users } from '../interfaces';

export default class UserServices {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: Users): Promise<string> {
    return this.model.create(user);
  }
}