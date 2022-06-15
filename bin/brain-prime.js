#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomfunc = (maximum) => Math.floor(Math.random() * maximum);

const prime = () => {
  console.log('Welcome to the Brain Games!');
  const UsernameFunction = () => readlineSync.question('May I have your name? ');
  const User = UsernameFunction();
  console.log(`Hello, ${User}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let counter = 0; counter < 3; counter += 1) {
    const Random = randomfunc(50) + 2;
    let Prime = Random;
    for (let i = 2; i < Random - 1; i += 1) {
      if (Random % i === 0 && Random !== 2) {
        Prime = 0;
      }
    }
    console.log('Question:', Random);
    const UserAnswer = readlineSync.question('Your answer: ');
    let Result;
    if (Prime === Random) {
      Result = 'yes';
    }
    if (Prime === 0) {
      Result = 'no';
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${Result}'. \n Let's try again, ${User}!`);
  }
  return console.log(`Congratulations, ${User}!`);
};
prime();
export default prime;
