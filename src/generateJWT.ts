import jwt, { SignOptions } from 'jsonwebtoken';

const secretKey = 'senhasupersecreta'; // SECRET KEY

const jwtConfig = { // HEADER
  expiresIn: '1d',
  algorithm: 'HS256',
};
// PAYLOAD DO BANCO DE DADOS, VEM COMO PARÂMETRO DE UMA FUNÇÃO
const generateJWT = (payload: { id: number, username: string, classe: string, level: number }) => {
  const token = jwt.sign({ data: payload }, secretKey, jwtConfig as SignOptions);
  return token;
};
export default generateJWT;