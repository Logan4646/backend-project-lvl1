import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const Username = () => readlineSync.question('May I have your name? ');
const User = Username();
console.log(`Hello, ${User}!`);

const randomfunc = (maximum) => {
    return Math.floor(Math.random() * maximum);
};
export const even = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const Random = randomfunc(100);
        console.log('Question:', Random);
        const Useranswer = readlineSync.question('Your answer: ');
        if (Random % 2 === 0) {
            if (Useranswer === 'yes') {
                console.log('Correct!');
            } else return console.log(`"${Useranswer}" is wrong answer ;(. Correct answer was yes. \n Let's try again, ${User}!`);
        }
        if (Random % 2 === 1) {
            if (Useranswer === 'no') {
                console.log('Correct!');
            } else return console.log(`"${Useranswer}" is wrong answer ;(. Correct answer was no. \n Let's try again, ${User}!`);
        } 
    }
    console.log(`Congratulations, ${User}!`);
};
even();