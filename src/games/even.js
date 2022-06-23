import commonFunction from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameCode = () => {
  const randomFunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 100;
  const random = randomFunction(max);
  const question = random;
  let result;
  if (random % 2 === 0) {
    result = 'yes';
  }
  if (random % 2 === 1) {
    result = 'no';
  }
  return [result, question];
};
export default () => commonFunction(description, gameCode);
