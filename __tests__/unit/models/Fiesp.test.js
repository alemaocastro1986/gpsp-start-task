import Fiesp from '../../../src/models/Fiesp';

describe('Model Fiesp', () => {
  test('Should return quantity of rows affected', async () => {
    const response = await Fiesp.confirmTask(614593);
    expect(response).toContain(1);
  });

  test('Should return one a call to company ', async () => {
    const expected = {
      businessRole: 'Analista de Projetos Sr',
      description:
        'Bom Dia, por gentileza solicito um orçamento de reparo/manutenção em calha/rufo no telhado do bloco 04, sala 01, para solucionar problema de goteira e infiltração, Obrigado.',
      email: 'marcos.v.gomes@gpssa.com.br',
      number: 618283,
    };

    const result = await Fiesp.getAvailableCallsByCompany('sesi-boqueirao');
    expect(result).toHaveProperty('businessRole');
    expect(result).toHaveProperty('number');
    expect(result).toHaveProperty('description');
    expect(result).toHaveProperty('email');
    expect(
      result.company
        .toLowerCase()
        .trim()
        .replace(/\s/g, '')
    ).toEqual('sesi-boqueirao');
  });

  test('Should return a list of calls ', async () => {
    const result = await Fiesp.getAllAvailableCalls();
    expect(result).toHaveLength(39);
  });
});
