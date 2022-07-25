// import Jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import jwt, { JwtPayload } from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/userModel';

// function verifyToken(req: Request, _res: Response) {
//   const token =req.headers.authorization;
//   return jwt.verify(token, 'senhasupersecreta') as JwtPayload;
// }
const secretKey = 'senhasupersecreta';

const validationToken = async (req: Request, res: Response, next: NextFunction) => {
  const userModel = new UserModel(connection);
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secretKey) as JwtPayload;
    const result = await userModel.getById(decoded.data.id, decoded.data.username);
    // console.log(result);
    if (result.length === 0) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.headers.userId = decoded.data.id; 
    // console.log(req.headers.userId);

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

const validationProductsIds = (req: Request, res: Response, next: NextFunction) => {
  // const { productsIds } = req.body;
  // if (!productsIds) {
  //   res.status(422).json({ message: '"productsIds" must include only numbers' });
  // }
  const orderScheme = Joi.object({
    productsIds: Joi.array().items(Joi.number().required()).min(1).required(),
  });
  const { error } = orderScheme.validate(req.body);
  //   console.log(productsIds);
  //   console.log(error);
  
  if (!error) return next();
  const { message } = error.details[0];
  if (message.includes('contains')) return next('"productsIds" must include only numbers');
  return next(message);
};

export default {
  validationToken,
  validationProductsIds,
};