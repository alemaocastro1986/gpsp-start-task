// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './__tests__/database/database.sqlite',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './__tests__/database/migrations',
    },
    seeds: {
      directory: './__tests__/database/seeds',
    },
    debug: false,
  },
};
