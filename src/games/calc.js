import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'What is the result of the expression?';

const getCalcResult = (random1, random2, currentSign) => {
  let calcResult;
  switch (currentSign) {
    case '+':
      calcResult = random1 + random2;
      break;
    case '-':
      calcResult = random1 - random2;
      break;
    case '*':
      calcResult = random1 * random2;
      break;
  }
  return calcResult;
};

const getGameCode = () => {
  const max = 20;
  const min = 0;
  const random1 = getRandomFunction(min, max);
  const random2 = getRandomFunction(min, max);
  const signs = ['+', '-', '*'];
  const signNumber = 3;
  const currentSign = signs[getRandomFunction(min, signNumber)];
  const question = `${random1} ${currentSign} ${random2}`;
  const result = String(getCalcResult(random1, random2, currentSign));
  return [result, question];
};

export default () => getCommonFunction(description, getGameCode);
