import { name, randomfunction, Answer } from '../src/index.js';

const gcd = () => {
  const Username = name();
  const GameTask = 'Find the greatest common divisor of given numbers.';
  console.log(GameTask);
  for (let counter = 0; counter < 3; counter += 1) {
    const max = 50;
    const AdditionalCondition = 1;
    let Random1 = randomfunction(max) + AdditionalCondition;
    let Random2 = randomfunction(max) + AdditionalCondition;
    let TemporaryVar;
    if (Random1 > Random2) {
      TemporaryVar = Random2;
      Random2 = Random1;
      Random1 = TemporaryVar;
    }
    console.log('Question:', Random1, Random2);
    const UserAnswer = Number(Answer());
    let Result;
    if (Random2 % Random1 === 0) {
      Result = Random1;
    }
    if (Random2 % Random1 !== 0) {
      Result = Random2 % Random1;
      while (Random1 % Result !== 0) {
        TemporaryVar = Result;
        Result = Random1 % TemporaryVar;
        Random1 = TemporaryVar;
      }
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Result}". \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default gcd;
