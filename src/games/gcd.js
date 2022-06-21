import readlineSync from 'readline-sync';

export const Description = 'Find the greatest common divisor of given numbers.';

export const GameCode = () => {
  const randomfunction = (maximum) => Math.floor(Math.random() * maximum);
  const max = 50;
  const AdditionalCondition = 1;
  let Random1 = randomfunction(max) + AdditionalCondition;
  let Random2 = randomfunction(max) + AdditionalCondition;
  let TemporaryVar;
  if (Random1 > Random2) {
    TemporaryVar = Random2;
    Random2 = Random1;
    Random1 = TemporaryVar;
  }
  console.log('Question:', Random1, Random2);
  const UserAnswer = Number(readlineSync.question('Your answer: '));
  let Result;
  if (Random2 % Random1 === 0) {
    Result = Random1;
  }
  if (Random2 % Random1 !== 0) {
    Result = Random2 % Random1;
    while (Random1 % Result !== 0) {
      TemporaryVar = Result;
      Result = Random1 % TemporaryVar;
      Random1 = TemporaryVar;
    }
  }
  return [UserAnswer, Result];
};
