import '../bootstrap';

export default {
  client: process.env.DB_CLIENT,
  connection: {
    server: process.env.DB_SERVER,
    port: 5004,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    filename: './__tests__/database/database.sqlite',
  },
};
