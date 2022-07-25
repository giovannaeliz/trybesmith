import { Request, Response } from 'express';
import OrderService from '../services/orderServices';

export default class OrderController {
  constructor(private orderService = new OrderService()) {

  }

  public getAll = async (_req: Request, res: Response) => {
    const getOrder = await this.orderService.getAll();
    return res.status(200).json(getOrder);
  };

  public create = async (req: Request, res: Response) => {
    const { userId } = req.headers;
    // console.log(userId);
    const newOrder = await this.orderService.create(Number(userId), req.body.productsIds);
    res.status(201).json(newOrder);
  };
}