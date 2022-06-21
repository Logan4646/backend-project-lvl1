import readlineSync from 'readline-sync';

export const Description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const GameCode = () => {
  const randomfunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 100;
  const Random = randomfunction(max);
  console.log('Question:', Random);
  const UserAnswer = readlineSync.question('Your answer: ');
  let Result;
  if (Random % 2 === 0) {
    Result = 'yes';
  }
  if (Random % 2 === 1) {
    Result = 'no';
  }
  return [UserAnswer, Result];
};
