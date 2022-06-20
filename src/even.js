import readlineSync from 'readline-sync';

const randomfunc = (maximum) => Math.floor(Math.random() * maximum);

const even = () => {
  console.log('Welcome to the Brain Games!');
  const UsernameFunction = () => readlineSync.question('May I have your name? ');
  const User = UsernameFunction();
  console.log(`Hello, ${User}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let counter = 0; counter < 3; counter += 1) {
    const max = 100;
    const Random = randomfunc(max);
    console.log('Question:', Random);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (Random % 2 === 0) {
      if (UserAnswer === 'yes') {
        console.log('Correct!');
      } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was yes. \n Let's try again, ${User}!`);
    }
    if (Random % 2 === 1) {
      if (UserAnswer === 'no') {
        console.log('Correct!');
      } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was no. \n Let's try again, ${User}!`);
    }
  }
  return console.log(`Congratulations, ${User}!`);
};
export default even;
