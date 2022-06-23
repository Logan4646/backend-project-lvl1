import commonFunction from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameCode = () => {
  const randomFunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 50;
  const additionalCondition = 2;
  const random = randomFunction(max) + additionalCondition;
  let primeDigit = random;
  for (let i = 2; i < random - 1; i += 1) {
    if (random % i === 0 && random !== 2) {
      primeDigit = 0;
    }
  }
  const question = random;
  let result;
  if (primeDigit === random) {
    result = 'yes';
  }
  if (primeDigit === 0) {
    result = 'no';
  }
  return [result, question];
};
export default () => commonFunction(description, gameCode);
