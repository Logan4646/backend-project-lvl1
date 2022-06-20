import { name, randomfunction, Answer } from '../index.js';

const even = () => {
  const Username = name();
  const GameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(GameTask);
  for (let counter = 0; counter < 3; counter += 1) {
    const max = 100;
    const Random = randomfunction(max);
    console.log('Question:', Random);
    const UserAnswer = Answer();
    let Result;
    if (Random % 2 === 0) {
      Result = 'yes';
    }
    if (Random % 2 === 1) {
      Result = 'no';
    }
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Result}". \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default even;
