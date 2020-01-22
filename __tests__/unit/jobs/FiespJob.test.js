import FiespJob from '../../../src/Jobs/FiespJob';

describe('Model Fiesp', () => {
  test('Should return quantity of rows affected', async () => {
    const response = await FiespJob.handle();
    expect(response[0].status).toEqual(200);
  });
});
