#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomfunc = (maximum) => Math.floor(Math.random() * maximum);

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  const UsernameFunction = () => readlineSync.question('May I have your name? ');
  const User = UsernameFunction();
  console.log(`Hello, ${User}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let counter = 0; counter < 3; counter += 1) {
    let Random1 = randomfunc(19) + 1;
    let Random2 = randomfunc(19) + 1;
    let helpvar;
    if (Random1 > Random2) {
      helpvar = Random2;
      Random2 = Random1;
      Random1 = helpvar;
    }
    console.log('Question:', Random1, Random2);
    const UserAnswer = Number(readlineSync.question('Your answer: '));
    let Result;
    if (Random2 % Random1 === 0) {
      Result = Random1;
    }
    if (Random2 % Random1 !== 0) {
      Result = Random2 % Random1;
      while (Random1 % Result !== 0) {
        helpvar = Result;
        Result = Random1 % helpvar;
        Random1 = helpvar;
      }
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Result}". \n Let's try again, ${User}!`);
  }
  return console.log(`Congratulations, ${User}!`);
};
gcd();
export default gcd;
