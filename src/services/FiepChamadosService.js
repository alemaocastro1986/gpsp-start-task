/* eslint-disable no-irregular-whitespace */
import FiepChamados from '../models/FiepChamados';
import FiepChamadosRealizados from '../models/FiepChamadosRealizados';

class FiepService {
  async getAll() {
    const response = await FiepChamados.query();
    return response;
  }

  async getAvailableCallsByCompany({ locationName, ...rest }) {
    const response = await FiepChamados.query()
      .select({
        id: 'ID',
        number: 'Solicitação de Serviço',
        description: 'Descrição do chamado',
        email: 'E-mail',
        company: 'Unidade',
        businessRole: 'Função de atendimento',
      })
      .whereNotExists(
        FiepChamadosRealizados.query()
          .select('*')
          .whereRaw(
            'ChamadosFiep.[Solicitação de Serviço] = ChamadosFiepRealizados.SolicitacaoNumero'
          )
      )
      .andWhereRaw(
        `replace(trim(LOWER(Unidade)), ' ', '') like '%${locationName}%'`
      )
      .first();

    return { ...response, companyInfo: rest };
  }
}

export default new FiepService();
