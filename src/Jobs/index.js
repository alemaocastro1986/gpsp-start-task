import cron from 'node-cron';
import { EventEmitter } from 'events';

import FiespJob from './FiespJob';

const jobs = [FiespJob];

class CronJobs {
  startJobs() {
    jobs.forEach(job => {
      cron.schedule(job.time, job.handle).start();
    });
  }
}

export default new CronJobs();
