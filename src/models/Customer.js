// todo favor remover os comentarios e ajustar os pontos pendentes
import Sequelize from 'sequelize';

const {
  Model, DataTypes: {
    BIGINT,
    STRING,
    DECIMAL,
  },
} = Sequelize;

export default class Customer extends Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: STRING, // todo adicionar limite de caracteres
      lastName: STRING, // todo adicionar limite de caracteres
      document: {
        type: STRING(14),
        unique: true,
      },
      email: STRING, // todo adicionar limite de caracteres
      password: STRING, // todo adicionar limite de caracteres
      balance: {
        type: DECIMAL(5, 2),
        allowNull: true,
        defaultValue: 0,
      },
    }, {
      sequelize,
      underscored: true, // todo garante que o atributo será convertido de camelCase para snake_case
      tableName: 'customer',
      freezeTableName: true,
      timestamps: true, // todo adiciona createdAt e updatedAt
    });
  }
}
