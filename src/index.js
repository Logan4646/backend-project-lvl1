import readlineSync from 'readline-sync';

const run = (description, getGameCode) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const roundNumber = 3;
  for (let counter = 0; counter < roundNumber; counter += 1) {
    const [result, question] = getGameCode();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (result !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default run;
