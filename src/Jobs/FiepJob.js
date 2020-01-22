/* eslint-disable no-await-in-loop */
import * as Sentry from '@sentry/node';

import FiespChamadosService from '../services/FiepChamadosService';
import FiepChamadosRealizadosService from '../services/FiepChamadosRealizadosService';

import Gpsp from '../lib/Gpsp';

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
        const filter = {
          ...t,
          locationName: t.locationName
            .toLowerCase()
            .trim()
            .replace(/\s/g, ''),
        };

        return FiespChamadosService.getAvailableCallsByCompany(filter);
      });

      const wrapperListOfTasks = await Promise.all(callByCompany);

      const availableWrapper = await wrapperListOfTasks.filter(
        t => t.id !== undefined
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
        FiepChamadosRealizadosService.store(c.callInfo.number)
      );

      await Promise.all(registerTasks);
    } catch (e) {
      Sentry.captureException(e);
    }
  }
}

export default new FiespJob();
