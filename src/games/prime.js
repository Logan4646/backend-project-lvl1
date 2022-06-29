import getCommonFunction from '../index.js';
import getRandomFunction from '../random-function.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeResult = (random) => {
  let primeDigit = random;
  let result;
  for (let i = 2; i < random - 1; i += 1) {
    if (random % i === 0 && random !== 2) {
      primeDigit = 0;
    }
  }
  if (primeDigit === random) {
    result = 'yes';
  }
  if (primeDigit === 0) {
    result = 'no';
  }
  return result;
};

const getGameCode = () => {
  const max = 50;
  const min = 2;
  const random = getRandomFunction(min, max);
  const question = random;
  const result = getPrimeResult(random);
  return [result, question];
};
export default () => getCommonFunction(description, getGameCode);
