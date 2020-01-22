import FiepChamadosRealizadosService from '../../../src/services/FiepChamadosRealizadosService';

describe('Fiep Chamados confirmados Service', () => {
  test('Sould a return a list of Fiep Chamados', async () => {
    const expected = await FiepChamadosRealizadosService.store(618283);

    expect(expected).toHaveProperty('SolicitacaoNumero');
    expect(expected.SolicitacaoNumero).toEqual(618283);
    expect(expected).toHaveProperty('TarefaAbertaEM');
  });
});
