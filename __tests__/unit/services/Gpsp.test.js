import GpspService from '../../../src/Services/Gpsp';

describe('Gpsp Service', () => {
  test('Start task', async () => {
    const expected = await GpspService.startTask({
      number: 'Not execute - Teste Automação',
      description: 'Tarefa teste automático',
      email: 'andrius.castro@gpssa.com.br',
    });
    expect(expected.status).toEqual(200);
  });

  test('Should return a list filtered of location ', async () => {
    const expected = await GpspService.getLocations('SE(?=SI|NAI)');
    expect(expected.status).toEqual(200);
    expect(expected.data).toHaveLength(10);
  });

  test('Should return a Principal Task of Workflow ', async () => {
    const expected = await GpspService.getPrincipalTaskByWorkflow(3509);
    expect(expected.status).toEqual(200);
    expect(expected.principalTask).toEqual(41177);
    expect(expected.idLocation).toEqual(41177);
    expect(expected.idLocation).toEqual(41177);
  });
});
