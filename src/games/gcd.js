import commonFunction from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gameCode = () => {
  const randomFunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 50;
  const additionalCondition = 1;
  let random1 = randomFunction(max) + additionalCondition;
  let random2 = randomFunction(max) + additionalCondition;
  let temporaryVar;
  if (random1 > random2) {
    temporaryVar = random2;
    random2 = random1;
    random1 = temporaryVar;
  }
  const questionMassiv = [random1, random2];
  const question = questionMassiv.join(' ');
  let calcResult;
  if (random2 % random1 === 0) {
    calcResult = random1;
  }
  if (random2 % random1 !== 0) {
    calcResult = random2 % random1;
    while (random1 % calcResult !== 0) {
      temporaryVar = calcResult;
      calcResult = random1 % temporaryVar;
      random1 = temporaryVar;
    }
  }
  const result = String(calcResult);
  return [result, question];
};
export default () => commonFunction(description, gameCode);
