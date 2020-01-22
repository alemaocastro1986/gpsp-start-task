import axios from 'axios';
import { addSeconds, addMinutes, subHours } from 'date-fns';
import gpspConfig from '../config/gpsp';

const defaultTask = {
  id: 41177,
  title: 'CHAMADO FIEP -',
  single: false,
  technicalSpecifications: null,
  endDateTime: '2021-01-07T08:12:00.000Z',
  company: { id: 3509 },
  startDateTime: '2021-01-07T08:12:00.000Z',
  businessRole: [
    {
      id: 405,
    },
    {
      id: 496,
    },
    {
      id: 414,
    },
  ],
  minimumExperience: { id: 3 },
  description: null,
  attachment: false,
  evidence: false,
  duration: '500',
  stagger: '60',
  actions: {
    id: 41197,
    emails: [
      {
        id: 0,
        email: 'talita.silva@gpssa.com.br',
      },
      {
        id: 0,
        email: 'marcos.v.gomes@gpssa.com.br',
      },
    ],
    idNextTask: 0,
    creationDate: '2020-01-07T13:54:40',
    dateUpdated: null,
  },
  listCheckList: [
    {
      $id: '23',
      id: 601069,
      kindOfQuestion: {
        $id: '24',
        id: 4,
        description: 'Texto Livre',
        creationDate: null,
        dateUpdated: null,
      },
      question: 'CHAMADO',
      answers: '(Livre)',
      variables: '@CHAMADO',
      order: 2,
      creationDate: '2020-01-07T18:44:36',
      dateUpdated: null,
    },
    {
      $id: '25',
      id: 601070,
      kindOfQuestion: {
        $id: '26',
        id: 4,
        description: 'Texto Livre',
        creationDate: null,
        dateUpdated: null,
      },
      question: 'UNIDADE - FIEP',
      answers: '(Livre)',
      variables: '@UNIDADE',
      order: 3,
      creationDate: '2020-01-07T18:44:36',
      dateUpdated: null,
    },
    {
      $id: '27',
      id: 601072,
      kindOfQuestion: {
        $id: '28',
        id: 4,
        description: 'Texto Livre',
        creationDate: null,
        dateUpdated: null,
      },
      question: 'DESCRIÇÃO DE ATENDIMENTO:',
      answers: '(Livre)',
      variables: '@DESCRIÇÃO',
      order: 4,
      creationDate: '2020-01-07T18:44:36',
      dateUpdated: null,
    },
    {
      $id: '29',
      id: 601074,
      kindOfQuestion: {
        $id: '30',
        id: 1,
        description: 'Seleção',
        creationDate: null,
        dateUpdated: null,
      },
      question: 'DESEJA INICIAR ATENDIMENTO?',
      answers: 'SIM',
      variables: null,
      order: 5,
      creationDate: '2020-01-07T18:44:36',
      dateUpdated: null,
    },
  ],
  recurrence: null,
  allowsMultipleTasks: false,
  redoTaskCanceled: true,
  signature: false,
  qrCode: false,
  beginRecurrence: 1,
  autoLink: false,
  workFlows: [{ id: 0 }],
};

class GpspService {
  constructor() {
    this.service = axios.create({
      baseURL: gpspConfig.host,
    });
  }

  async startTask(data, task = defaultTask) {
    const { number, email, id, company } = data;

    try {
      const wrapperTask = {
        ...task,
        title: `${task.title} ${number} `,
        description: '',
        company,
        id,
        actions: {
          ...task.actions,
          emails: [{ id: 0, email }],
        },
        endDateTime: subHours(addMinutes(addSeconds(new Date(), 45), 15), 3),
        startDateTime: subHours(addSeconds(new Date(), 45), 3),
      };

      const { data: response, status } = await this.service.put(
        'task',
        wrapperTask,
        {
          params: {
            id: wrapperTask.id,
            token: gpspConfig.token,
          },
        }
      );

      return { response, status, callInfo: { ...data } };
    } catch (e) {
      return new Error(e.message);
    }
  }

  async getLocations(strLocations) {
    const { data, status } = await this.service.get('/location', {
      params: {
        list: true,
        login: '00823904016',
        token: gpspConfig.token,
      },
    });

    if (strLocations) {
      const filter = new RegExp(strLocations);
      return {
        data: data
          .filter(local => filter.test(local.name))
          .map(l => ({
            id: l.id,
            name: l.name,
          })),
        status,
      };
    }

    return { data, status };
  }

  async getPrincipalTaskByWorkflow({ id, name }) {
    const { data, status } = await this.service.get('workflow', {
      params: {
        Token: gpspConfig.token,
        idLocation: id,
        filtro: true,
      },
    });

    if (data.length <= 0) {
      return { data, status };
    }

    return {
      principalTask: data[0].principalTask.id,
      idLocation: id,
      locationName: name
        .toLowerCase()
        .trim()
        .replace(/\s/g, ''),
      status,
    };
  }
}

export default new GpspService();
