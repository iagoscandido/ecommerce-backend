import { sequelize } from '../commons/dbConnection.js';
import { log } from '../commons/index.js';
import HttpError from '../errors/HttpError.js';

export default class HealthCheck {
  async execute() {

    try {
      await sequelize.authenticate();
      log.info('Sequelize connected sucessfully');

    } catch (error) {
      log.error(error);
      throw new HttpError('Sequelize failed to connect', 500);
    }
  }
}
