import { subHours } from 'date-fns';
import FiepChamadosRealizados from '../models/FiepChamadosRealizados';

class FiepChamadosRealizadosService {
  async store(callNumber) {
    const callConfirmed = await FiepChamadosRealizados.query().insert({
      SolicitacaoNumero: callNumber,
      TarefaAbertaEM: subHours(new Date(), 3),
    });
    return callConfirmed;
  }
}

export default new FiepChamadosRealizadosService();
