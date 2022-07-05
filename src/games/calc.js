import run from '../index.js';
import getRandom from '../random-function.js';

const description = 'What is the result of the expression?';

const getCalc = (first, second, operation) => {
  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const getCode = () => {
  const number1 = getRandom(0, 20);
  const number2 = getRandom(0, 20);
  const signs = ['+', '-', '*'];
  const currentSign = signs[getRandom(0, 2)];
  const question = `${number1} ${currentSign} ${number2}`;
  const result = String(getCalc(number1, number2, currentSign));
  return [result, question];
};

export default () => run(description, getCode);
