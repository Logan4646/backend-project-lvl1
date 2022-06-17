import { name, randomfunction, Answer } from '../src/index.js';

const progression = () => {
  const Username = name();
  const GameTask = 'What number is missing in the progression?';
  console.log(GameTask);
  for (let counter1 = 0; counter1 < 3; counter1 += 1) {
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
    const UserAnswer = Number(Answer());
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
    if (Result === UserAnswer) {
      console.log('Correct!');
    } else return console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${Result}'. \n Let's try again, ${Username}!`);
  }
  return console.log(`Congratulations, ${Username}!`);
};
export default progression;
