import cron from 'node-cron';

import FiespJob from './FiepJob';

const jobs = [FiespJob];

class CronJobs {
  startJobs() {
    jobs.forEach(job => {
      cron.schedule(job.time, job.handle).start();
    });
  }
}

export default new CronJobs();
