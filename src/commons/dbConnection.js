import { Sequelize } from 'sequelize';
import { log } from './index.js';
import {
  Customer,
} from '../models/index.js';

const newConnection = () => {
  log.info('Creating new DB connection');

  const {
    DB_USER: user,
    DB_PASSWORD: password,
    DB_NAME: dbName,
    DB_HOST: host,
    DB_PORT: port,
    DB_DIALECT: dialect,
  } = process.env;

  return new Sequelize(dbName, user, password, {
    host,
    port,
    dialect,
    benchmark: false,
    pool: {
      max: 30,
      min: 0,
      idle: 10 * 1000,
      acquire: 60000,
      evict: 1000,
    },
  });

};

const getEntities = (sequelize) => {
  const models = {
    Customer,
  };

  Object.values(models).forEach(elem => elem.init(sequelize));
  Object.values(models).forEach(elem => {
    if (elem.associate)
      elem.associate();
  });
};

const sequelize = newConnection();
const entities = getEntities(sequelize);

export {
  sequelize,
  entities,
};
