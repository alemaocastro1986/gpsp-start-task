/* eslint-disable no-await-in-loop */
import * as Sentry from '@sentry/node';

import Fiesp from '../models/Fiesp';
import Gpsp from '../Services/Gpsp';

async function generateTask(task) {
  const response = await Gpsp.startTask({
    ...task,
    id: task.companyInfo.principalTask,
  });

  if (response.status === 200) {
    await Fiesp.confirmTask(task.number);
  }
}

class FiespJob {
  get time() {
    return '0 */5 * * * *';
  }

  async handle() {
    try {
      const locations = await Gpsp.getLocations('SE(?=SI|NAI)');

      const listOfTasks = locations.data.map(element => {
        return Gpsp.getPrincipalTaskByWorkflow(element);
      });

      const tasksBylocation = await Promise.all(listOfTasks);
      const tasksOfStart = tasksBylocation.filter(
        t => t.principalTask && t.principalTask
      );

      const callByCompany = tasksOfStart.map(t => {
        return Fiesp.getAvailableCallsByCompany(
          t.locationName
            .toLowerCase()
            .trim()
            .replace(/\s/g, ''),
          t
        );
      });

      const wrapperListOfTasks = await Promise.all(callByCompany);
      const availableWrapper = await wrapperListOfTasks.filter(
        t => t !== undefined
      );

      const generateTasks = availableWrapper.map(a =>
        Gpsp.startTask({
          ...a,
          company: {
            id: a.companyInfo.idLocation,
          },
          id: a.companyInfo.principalTask,
        })
      );
      const createdtasks = await Promise.all(generateTasks);
      const registerTasks = createdtasks.map(c =>
        Fiesp.confirmTask(c.callInfo.number)
      );

      await Promise.all(registerTasks);
    } catch (e) {
      Sentry.captureException(e);
    }
  }
}

export default new FiespJob();
