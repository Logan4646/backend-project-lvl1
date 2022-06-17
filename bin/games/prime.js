import { name, randomfunction, Answer } from '../src/index.js';

const prime = () => {
  const Username = name();
  const GameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(GameTask);
  for (let counter = 0; counter < 3; counter += 1) {
    const max = 50;
    const AdditionalCondition = 2;
    const Random = randomfunction(max) + AdditionalCondition;
    let PrimeDigit = Random;
    for (let i = 2; i < Random - 1; i += 1) {
      if (Random % i === 0 && Random !== 2) {
        PrimeDigit = 0;
      }
    }
    console.log('Question:', Random);
    const UserAnswer = Answer();
    let Result;
    if (PrimeDigit === Random) {
      Result = 'yes';
    }
    if (PrimeDigit === 0) {
      Result = 'no';
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${Result}'. \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default prime;
