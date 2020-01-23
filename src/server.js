import './bootstrap';

import 'express-async-errors';
import express from 'express';
import * as Sentry from '@sentry/node';
import CronJobs from './Jobs';

import sentryConfig from './config/sentry';

class Server {
  constructor() {
    this.app = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.jobs();
    this.handleErrors();
  }

  middlewares() {
    this.app.use(Sentry.Handlers.requestHandler());

    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', async (req, res) => {
      return res.json({
        name: 'gpsp_start_task',
        version: '1.0.1',
      });
    });
    this.app.use(Sentry.Handlers.errorHandler());
  }

  jobs() {
    CronJobs.startJobs();
  }

  handleErrors() {
    this.app.use((err, req, res, next) => {
      return res.json({
        error: err,
      });
    });
  }
}

export default new Server().app;
