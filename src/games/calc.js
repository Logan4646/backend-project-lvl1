import commonFunction from '../index.js';

const description = 'What is the result of the expression?';

const gameCode = () => {
  const randomFunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 20;
  const random1 = randomFunction(max);
  const random2 = randomFunction(max);
  const signs = ['+', '-', '*'];
  const currentSign = signs[randomFunction(3)];
  const questionMassiv = [random1, currentSign, random2];
  const question = questionMassiv.join(' ');
  let calcResult;
  if (currentSign === '+') {
    calcResult = random1 + random2;
  }
  if (currentSign === '-') {
    calcResult = random1 - random2;
  }
  if (currentSign === '*') {
    calcResult = random1 * random2;
  }
  const result = String(calcResult);
  return [result, question];
};

export default () => commonFunction(description, gameCode);
