import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcdResult = (random1, random2) => {
  let calcResult;
  let temporaryVar2;
  let calcVar = random1;
  if (random2 % calcVar === 0) {
    calcResult = calcVar;
  }
  if (random2 % calcVar !== 0) {
    calcResult = random2 % calcVar;
    while (calcVar % calcResult !== 0) {
      temporaryVar2 = calcResult;
      calcResult = calcVar % temporaryVar2;
      calcVar = temporaryVar2;
    }
  }
  return calcResult;
};

const getGameCode = () => {
  const max = 50;
  const min = 1;
  let random1 = getRandomFunction(min, max);
  let random2 = getRandomFunction(min, max);
  let temporaryVar1;
  if (random1 > random2) {
    temporaryVar1 = random2;
    random2 = random1;
    random1 = temporaryVar1;
  }
  const question = `${random1} ${random2}`;
  const result = String(getGcdResult(random1, random2));
  return [result, question];
};
export default () => getCommonFunction(description, getGameCode);
