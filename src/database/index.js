import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Room from '../app/models/Room';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment, Room];

class Database {
  constructor() {
    this.init();
  }

  //  Responsável por conectar com a base de dados e carregar os models.
  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
