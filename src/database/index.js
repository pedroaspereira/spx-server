import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Supplier from '../app/models/Supplier';
import Customer from '../app/models/Customer';

import databaseConfig from '../config/database';

const models = [User, File, Supplier, Customer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
