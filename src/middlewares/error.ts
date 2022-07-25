import { NextFunction, Request, Response } from 'express';

const error = async (err: string, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  if (err === '"productsIds" is required') {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  if (err === '"productsIds" must be an array') {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (err === ('"productsIds[0]" must be a number'
  || '"productsIds" does not contain 1 required value(s)')) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return res.status(422).json({ message: '"productsIds" must include only numbers' });
};
export default error;