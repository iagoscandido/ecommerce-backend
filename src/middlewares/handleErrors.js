import HttpError from '../errors/HttpError.js';
import { log } from '../commons/index.js';

export default async (error, _req, res, _next) => {
  log.error('Error Express');
  log.error(error);

  if (error instanceof HttpError)
    return res.status(error.statusCode).json({ message: error.message });

  return res.status(500).json({ message: 'Ocorreu um erro' });
};
