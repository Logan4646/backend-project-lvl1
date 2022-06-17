import { name, randomfunction, Answer } from '../src/index.js';

const calc = () => {
  const Username = name();
  const GameTask = 'What is the result of the expression?';
  console.log(GameTask);
  for (let counter = 0; counter < 3; counter += 1) {
    const max = 10;
    const Random1 = randomfunction(max);
    const Random2 = randomfunction(max);
    const signs = ['+', '-', '*'];
    const CurrentSign = signs[randomfunction(3)];
    console.log('Question:', Random1, CurrentSign, Random2);
    const UserAnswer = Number(Answer());
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
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${CalcResult}". \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default calc;
