import commonFunction from '../index.js';

const description = 'What number is missing in the progression?';

const gameCode = () => {
  const randomFunction = (maximum) => Math.floor(Math.random() * maximum);
  const random1 = randomFunction(30);
  const random2 = randomFunction(10);
  let nextMassElem = random1 + random2;
  const massiv = [random1];
  const massivLimit = randomFunction(5) + 5;
  for (let counter2 = 0; counter2 < massivLimit; counter2 += 1) {
    massiv.push(nextMassElem);
    nextMassElem += random2;
  }
  const questionElement = randomFunction(massivLimit - 1);
  massiv[questionElement] = '..';
  const question = massiv.join(' ');
  let result;
  if (questionElement === 0) {
    result = random1;
  }
  if (questionElement === 5) {
    result = random1 + random2 * 5;
  }
  if (questionElement !== 5 && questionElement !== 0) {
    result = (massiv[questionElement + 1] + massiv[questionElement - 1]) / 2;
  }
  const calcResult = String(result);
  return [calcResult, question];
};
export default () => commonFunction(description, gameCode);
