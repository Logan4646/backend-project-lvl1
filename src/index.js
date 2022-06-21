import readlineSync from 'readline-sync';

const CommonFunction = (Description, GameCode) => {
  console.log('Welcome to the Brain Games!');
  const Username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Username}!`);
  console.log(Description);
  for (let counter = 0; counter < 3; counter += 1) {
    const [UserAnswer, Result] = GameCode();
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Result}". \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default CommonFunction;
