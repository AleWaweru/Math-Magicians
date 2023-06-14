import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate(2, 3, '+')).toMatchSnapshot();
  });

  test('subtracts two numbers', () => {
    expect(operate(5, 2, '-')).toMatchSnapshot();
  });

  test('multiplies two numbers', () => {
    expect(operate(3, 4, 'x')).toMatchSnapshot();
  });

  test('divides two numbers', () => {
    expect(operate(10, 2, '÷')).toMatchSnapshot();
  });

  test('returns an error message if dividing by 0', () => {
    expect(operate(5, 0, '÷')).toMatchSnapshot();
  });

  test('calculates the modulo of two numbers', () => {
    expect(operate(5, 2, '%')).toMatchSnapshot();
  });

  test('returns an error message if finding modulo when dividing by 0', () => {
    expect(operate(5, 0, '%')).toMatchSnapshot();
  });

  test('throws an error for unknown operations', () => {
    expect(() => operate(2, 3, '*')).toThrowErrorMatchingSnapshot();
  });
});
