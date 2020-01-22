import FiepChamadosService from '../../../src/services/FiepChamadosService';

describe('Fiep Chamdados Service', () => {
  test('Sould a return a list of Fiep Chamados', async () => {
    const expected = await FiepChamadosService.getAll();

    expect(expected.length).toBeGreaterThan(1);
  });
  test('Sould a return a one call by Company', async () => {
    const expected = await FiepChamadosService.getAvailableCallsByCompany({
      locationName: 'senai-telemacoborba',
      id: 0,
      number: 2342,
      email: 'john@test.com.br',
      description: 'teste de envio de informação',
      company: 'SENAI - telemacoborba',
      businesRole: 'Ananlista de Sistemas',
    });

    expect(expected).toHaveProperty('businessRole');
    expect(expected).toHaveProperty('company');
    expect(expected).toHaveProperty('description');
    expect(expected).toHaveProperty('email');
    expect(expected).toHaveProperty('number');
    expect(expected).toHaveProperty('id');
  });
});
