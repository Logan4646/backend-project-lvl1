import run from '../index.js';
import getRandom from '../random-function.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const getCode = () => {
  const number1 = getRandom(0, 50);
  const number2 = getRandom(0, 50);
  const question = `${number1} ${number2}`;
  const result = String(getGcd(number1, number2));
  return [result, question];
};
export default () => run(description, getCode);
