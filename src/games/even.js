import run from '../index.js';
import getRandom from '../random-function.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const getCode = () => {
  const number = getRandom(0, 100);
  const question = number;
  const result = isEven(number) ? 'yes' : 'no';
  return [result, question];
};
export default () => run(description, getCode);
