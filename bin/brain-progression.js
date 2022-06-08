#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomfunc = (maximum) => Math.floor(Math.random() * maximum);

const progression = () => {
  console.log('Welcome to the Brain Games!');
  const UsernameFunction = () => readlineSync.question('May I have your name? ');
  const User = UsernameFunction();
  console.log(`Hello, ${User}!`);
  console.log('What number is missing in the progression?');
  for (let counter = 0; counter < 3; counter += 1) {
    const Random1 = randomfunc(30);
    const Random2 = randomfunc(10);
    let Masselem = Random1 + Random2;
    const massiv = [Random1];
    const j = randomfunc(5) + 5;
    for (let i = 0; i < j; i += 1) {
      massiv.push(Masselem);
      Masselem += Random2;
    }
    const Random3 = randomfunc(j - 1);
    massiv[Random3] = '..';
    console.log('Question:', massiv.join(' '));
    const UserAnswer = Number(readlineSync.question('Your answer: '));
    let Result;
    if (Random3 === 0) {
      Result = Random1;
    }
    if (Random3 === 5) {
      Result = Random1 + Random2 * 5;
    }
    if (Random3 !== 5 && Random3 !== 0) {
      Result = (massiv[Random3 + 1] + massiv[Random3 - 1]) / 2;
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${Result}'. \n Let's try again, ${User}!`);
  }
  return console.log(`Congratulations, ${User}!`);
};
progression();
export default progression;
