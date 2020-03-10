import Sequelize, { Model } from 'sequelize';

class Supplier extends Model {
  static init(sequelize) {
    super.init(
      {
        companyName: Sequelize.STRING,
        email: Sequelize.STRING,
        street: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        zip: Sequelize.STRING,
        cnpj: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Supplier;
