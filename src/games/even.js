import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (random) => (random % 2 === 0);
const checkEven = (random) => {
  const result = isEven(random) ? 'yes' : 'no';
  return result;
};

const getGameCode = () => {
  const max = 100;
  const min = 0;
  const random = getRandomFunction(min, max);
  const question = random;
  const result = checkEven(random);
  return [result, question];
};
export default () => getCommonFunction(description, getGameCode);
