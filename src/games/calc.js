import readlineSync from 'readline-sync';

export const Description = 'What is the result of the expression?';

export const GameCode = () => {
  const randomfunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 10;
  const Random1 = randomfunction(max);
  const Random2 = randomfunction(max);
  const signs = ['+', '-', '*'];
  const CurrentSign = signs[randomfunction(3)];
  console.log('Question:', Random1, CurrentSign, Random2);
  const UserAnswer = Number(readlineSync.question('Your answer: '));
  let CalcResult;
  if (CurrentSign === '+') {
    CalcResult = Random1 + Random2;
  }
  if (CurrentSign === '-') {
    CalcResult = Random1 - Random2;
  }
  if (CurrentSign === '*') {
    CalcResult = Random1 * Random2;
  }
  return [UserAnswer, CalcResult];
};
