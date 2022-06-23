import readlineSync from 'readline-sync';

const commonFunction = (description, gameCode) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let counter = 0; counter < 3; counter += 1) {
    const [result, question] = gameCode();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (result === userAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default commonFunction;
