import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcdResult = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcdResult(number2, number1 % number2);
};

const getGameCode = () => {
  const max = 50;
  const min = 1;
  const random1 = getRandomFunction(min, max);
  const random2 = getRandomFunction(min, max);
  const question = `${random1} ${random2}`;
  const result = String(getGcdResult(random1, random2));
  return [result, question];
};
export default () => getCommonFunction(description, getGameCode);
