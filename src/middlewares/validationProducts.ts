interface Error {
  status?: number,
  name?: string,
  message?: string,
}
function validationName(name: string): Error | undefined {
  if (!name) {
    return ({ status: 400, message: '"name" is required' });
  } if (typeof name !== 'string') {
    return ({ status: 422, message: '"name" must be a string' });
  } if (name.length < 3) {
    return ({ status: 422, message: '"name" length must be at least 3 characters long' });
  }
  return undefined;
}
function validationAmount(amount: string): Error | undefined {
  if (!amount) {
    return ({ status: 400, message: '"amount" is required' });
  } if (typeof amount !== 'string') {
    return ({ status: 422, message: '"amount" must be a string' });
  } if (amount.length < 3) {
    return ({ status: 422, message: '"amount" length must be at least 3 characters long' });
  }
  return undefined;
}

export default { validationName, validationAmount };