import readlineSync from 'readline-sync';

export const Description = 'What number is missing in the progression?';

export const GameCode = () => {
  const randomfunction = (maximum) => Math.floor(Math.random() * maximum);
  const Random1 = randomfunction(30);
  const Random2 = randomfunction(10);
  let NextMassElem = Random1 + Random2;
  const massiv = [Random1];
  const MassivLimit = randomfunction(5) + 5;
  for (let counter2 = 0; counter2 < MassivLimit; counter2 += 1) {
    massiv.push(NextMassElem);
    NextMassElem += Random2;
  }
  const QuestionElement = randomfunction(MassivLimit - 1);
  massiv[QuestionElement] = '..';
  console.log('Question:', massiv.join(' '));
  const UserAnswer = Number(readlineSync.question('Your answer: '));
  let Result;
  if (QuestionElement === 0) {
    Result = Random1;
  }
  if (QuestionElement === 5) {
    Result = Random1 + Random2 * 5;
  }
  if (QuestionElement !== 5 && QuestionElement !== 0) {
    Result = (massiv[QuestionElement + 1] + massiv[QuestionElement - 1]) / 2;
  }
  return [UserAnswer, Result];
};
