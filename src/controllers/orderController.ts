import { Request, Response } from 'express';
import OrderService from '../services/orderServices';

export default class OrderController {
  constructor(private orderService = new OrderService()) {

  }

  public getAll = async (_req: Request, res: Response) => {
    const getOrder = await this.orderService.getAll();
    return res.status(200).json(getOrder);
  };
}