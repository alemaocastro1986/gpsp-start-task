import '../bootstrap';
import { subHours } from 'date-fns';

import Db from '../database';

class FiespChamados {
  async getAvailableCallsByCompany(company, data) {
    const QueryBuilder =
      process.env.NODE_ENV !== 'test' ? Db.withSchema('db_owner') : Db;
    const response = await QueryBuilder.select({
      id: 'ID',
      number: 'Solicitação de Serviço',
      description: 'Descrição do chamado',
      email: 'E-mail',
      company: 'Unidade',
      businessRole: 'Função de atendimento',
    })
      .from('ChamadosFiep')
      .whereNotExists(function() {
        this.select('*')
          .from('ChamadosFiepRealizados')
          .whereRaw(
            'ChamadosFiep.[Solicitação de Serviço] = ChamadosFiepRealizados.SolicitacaoNumero'
          );
      })
      // eslint-disable-next-line no-irregular-whitespace
      .andWhereRaw(`replace(trim(LOWER(Unidade)), ' ', '') like '%${company}%'`)
      .first();

    if (response) {
      return { ...response, companyInfo: { ...data } };
    }

    return response;
  }

  async getAllAvailableCalls() {
    const QueryBuilder =
      process.env.NODE_ENV !== 'test' ? Db.withSchema('db_owner') : Db;
    const response = await QueryBuilder.select({
      number: 'Solicitação de Serviço',
      description: 'Descrição do chamado',
      email: 'E-mail',
      company: 'Unidade',
      businessRole: 'Função de atendimento',
    })
      .from('ChamadosFiep')
      .whereNotExists(function() {
        this.select('*')
          .from('ChamadosFiepRealizados')
          .whereRaw(
            'ChamadosFiep.[Solicitação de Serviço] = ChamadosFiepRealizados.SolicitacaoNumero'
          );
      });
    return response;
  }

  async confirmTask(callNumber) {
    const QueryBuilder =
      process.env.NODE_ENV !== 'test' ? Db.withSchema('db_owner') : Db;
    const response = await QueryBuilder.insert({
      SolicitacaoNumero: callNumber,
      TarefaAbertaEM: subHours(new Date(), 3).toISOString(),
    }).into('ChamadosFiepRealizados');

    return response;
  }
}

export default new FiespChamados();
