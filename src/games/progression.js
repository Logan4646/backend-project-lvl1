import run from '../index.js';
import getRandom from '../random-function.js';

const description = 'What number is missing in the progression?';
const arrayLimits = getRandom(5, 10);

const getProgression = (first, step, questionElement) => {
  let nextElem = first + step;
  const array = [first];
  for (let counter = 0; counter < arrayLimits; counter += 1) {
    array.push(nextElem);
    nextElem += step;
  }
  array[questionElement] = '..';
  return array;
};

const getCode = () => {
  const number1 = getRandom(0, 30);
  const number2 = getRandom(0, 10);
  const questionElement = getRandom(0, arrayLimits - 1);
  const array = getProgression(number1, number2, questionElement);
  const question = array.join(' ');
  let result;
  if (questionElement === 0) {
    result = number1;
  }
  if (questionElement === 5) {
    result = number1 + number2 * 5;
  }
  if (questionElement !== 5 && questionElement !== 0) {
    result = (array[questionElement + 1] + array[questionElement - 1]) / 2;
  }
  const calcResult = String(result);
  return [calcResult, question];
};
export default () => run(description, getCode);
