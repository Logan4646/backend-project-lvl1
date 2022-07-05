import run from '../index.js';
import getRandom from '../random-function.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let flag = true;
  for (let i = 2; i < number - 1; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

const getGame = () => {
  const number = getRandom(2, 50);
  const question = number;
  const result = isPrime(number) ? 'yes' : 'no';
  return [result, question];
};
export default () => run(description, getGame);
