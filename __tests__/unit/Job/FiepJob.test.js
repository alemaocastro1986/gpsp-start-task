import FiepJob from '../../../src/Jobs/FiepJob';

describe('Fiep Job test', () => {
  test('Should called a handle function', async () => {
    const expected = await FiepJob.handle();

    expect(expected).toBeTruthy();
  });
});
