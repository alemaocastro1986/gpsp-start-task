import Knex from 'knex';

import databaseConfig from '../config/database';

class Database {
  constructor() {
    this.query = Knex(databaseConfig);
  }
}

export default new Database().query;
