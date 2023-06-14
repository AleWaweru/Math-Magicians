import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should update next number based on button name and calculator object with operation', () => {
    const obj = {
      total: 3,
      next: '4',
      operation: '+',
    };
    const buttonName = '2';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });

  it('should update next number if the button name is a decimal point', () => {
    const obj = {
      total: 2,
      next: '4',
      operation: '*',
    };
    const buttonName = '.';
    expect(calculate(obj, buttonName)).toMatchSnapshot();
  });
});
