import { NextFunction, Request, Response } from 'express';

const validationUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  console.log(username);
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  } if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  } if (username.length < 3) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  next();
};
const validationClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res.status(400).json({ message: '"classe" is required' });
  } if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  } if (classe.length < 3) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }
  next();
};
const validationLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(400).json({ message: '"level" is required' });
  } if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  } if (level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  next();
};
const validationPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  } if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  } if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  next();
};

export default {
  validationUserName,
  validationClasse,
  validationLevel,
  validationPassword,
};