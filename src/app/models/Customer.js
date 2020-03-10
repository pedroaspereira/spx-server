import Sequelize, { Model } from 'sequelize';

class Customer extends Model {
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

  // static associate(models) {
  //   this.hasMany(models.User, { foreignKey: 'user_id', as: 'user' });
  // }
}

export default Customer;
