#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomfunc = (maximum) => Math.floor(Math.random() * maximum);

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const UsernameFunction = () => readlineSync.question('May I have your name? ');
  const User = UsernameFunction();
  console.log(`Hello, ${User}!`);
  console.log('What is the result of the expression?');
  for (let counter = 0; counter < 3; counter += 1) {
    const Random1 = randomfunc(10);
    const Random2 = randomfunc(10);
    const signs = ['+', '-', '*'];
    const CurrentSign = signs[randomfunc(3)];
    console.log('Question:', Random1, CurrentSign, Random2);
    const UserAnswer = Number(readlineSync.question('Your answer: '));
    let CalcResult = 0;
    if (CurrentSign === '+') {
      CalcResult = Random1 + Random2;
    }
    if (CurrentSign === '-') {
      CalcResult = Random1 - Random2;
    }
    if (CurrentSign === '*') {
      CalcResult = Random1 * Random2;
    }
    if (CalcResult === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${CalcResult}". \n Let's try again, ${User}!`);
  }
  return console.log(`Congratulations, ${User}!`);
};
calc();
export default calc;
