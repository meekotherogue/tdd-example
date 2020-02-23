import algorithm from './algorithm';

describe('algorithm', () => {
  it('Takes the two inputs and adds them since the second one is bigger', () => {
    const input1 = 5;
    const input2 = 10;
    expect(algorithm.addSub(input1, input2)).toBe(15);
  });

  it('Takes the two inputs and subtracts them since the second one is smaller', () => {
    const input1 = 10;
    const input2 = 5;
    expect(algorithm.addSub(input1, input2)).toBe(5);
  });

  it('Takes the two inputs and does what when they are the same??', () => {
    const input1 = 10;
    const input2 = 10;
    expect(algorithm.addSub(input1, input2)).toBe(0);
  });
});
