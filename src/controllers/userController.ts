import { Request, Response } from 'express';
import UserService from '../services/userServices';
import generateJWT from '../generateJWT';

export default class UserController {
  constructor(private userService = new UserService()) {

  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    return res.status(201).json({ token: userCreated });
  };

  public login = async (req: Request, res: Response) => {
    const login = await this.userService.loginUser(req.body);
  
    if (login) {
      const user = generateJWT(login);
      return res.status(200).json({ token: user });
    }
    return res.status(401).json({ message: 'Username or password invalid' });
  };
}