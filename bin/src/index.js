import readlineSync from 'readline-sync';

export const name = () => {
  console.log('Welcome to the Brain Games!');
  const Username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Username}!`);
  return Username;
};

export const randomfunction = (maximum) => Math.floor(Math.random() * maximum);

export const Answer = () => readlineSync.question('Your answer: ');
