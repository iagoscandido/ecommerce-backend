import { Sequelize } from 'sequelize';
import { log } from './index.js';

const {
  DB_USER: user,
  DB_PASSWORD: password,
  DB_NAME: dbName,
  DB_HOST: host,
  DB_PORT: port,
  DB_DIALECT: dialect,
} = process.env;

log.info('Creating new DB connection');
const sequelize = new Sequelize(dbName, user, password, {
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

export {
  sequelize,
};
