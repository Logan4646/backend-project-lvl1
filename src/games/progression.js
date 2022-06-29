import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'What number is missing in the progression?';

const getProgression = (random1, random2) => {
  let nextMassElem = random1 + random2;
  const array = [random1];
  const minRows = 5;
  const maxRows = 10;
  const arrayLimits = getRandomFunction(minRows, maxRows);
  for (let counter2 = 0; counter2 < arrayLimits; counter2 += 1) {
    array.push(nextMassElem);
    nextMassElem += random2;
  }
  return array;
};

const getGameCode = () => {
  const maxNumbers1 = 30;
  const maxNumbers2 = 10;
  const min = 0;
  const random1 = getRandomFunction(min, maxNumbers1);
  const random2 = getRandomFunction(min, maxNumbers2);
  const array = getProgression(random1, random2)
  const questionElement = getRandomFunction(min, array.length - 1);
  array[questionElement] = '..';
  const question = array.join(' ');
  let result;
  if (questionElement === 0) {
    result = random1;
  }
  if (questionElement === 5) {
    result = random1 + random2 * 5;
  }
  if (questionElement !== 5 && questionElement !== 0) {
    result = (array[questionElement + 1] + array[questionElement - 1]) / 2;
  }
  const calcResult = String(result);
  return [calcResult, question];
};
export default () => getCommonFunction(description, getGameCode);
