import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'What is the result of the expression?';

const getCalcResult = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

const getGameCode = () => {
  const max = 20;
  const min = 0;
  const random1 = getRandomFunction(min, max);
  const random2 = getRandomFunction(min, max);
  const signs = ['+', '-', '*'];
  const currentSign = signs[getRandomFunction(min, 2)];
  const question = `${random1} ${currentSign} ${random2}`;
  const result = String(getCalcResult(random1, random2, currentSign));
  return [result, question];
};

export default () => getCommonFunction(description, getGameCode);
