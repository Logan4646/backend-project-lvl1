import readlineSync from 'readline-sync';

export const Description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const GameCode = () => {
  const randomfunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 50;
  const AdditionalCondition = 2;
  const Random = randomfunction(max) + AdditionalCondition;
  let PrimeDigit = Random;
  for (let i = 2; i < Random - 1; i += 1) {
    if (Random % i === 0 && Random !== 2) {
      PrimeDigit = 0;
    }
  }
  console.log('Question:', Random);
  const UserAnswer = readlineSync.question('Your answer: ');
  let Result;
  if (PrimeDigit === Random) {
    Result = 'yes';
  }
  if (PrimeDigit === 0) {
    Result = 'no';
  }
  return [UserAnswer, Result];
};
