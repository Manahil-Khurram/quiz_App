import inquirer from 'inquirer';
class Quiz {
    questions;
    currentQuestion;
    score;
    constructor(questions) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.score = 0;
    }
    askQuestion() {
        inquirer
            .prompt({
            type: 'input',
            name: 'answer',
            message: this.questions[this.currentQuestion].question
        })
            .then(answers => this.checkAnswer(answers.answer));
    }
    checkAnswer(answer) {
        if (answer.toLowerCase() === this.questions[this.currentQuestion].answer.toLowerCase()) {
            console.log('Correct!');
            this.score++;
        }
        else {
            console.log('Incorrect');
        }
        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.askQuestion();
        }
        else {
            console.log(`Your score: ${this.score}/${this.questions.length}`);
        }
    }
}
const myQuiz = new Quiz([
    {
        question: 'Code to install inquirer',
        answer: 'npm i inquirer'
    },
    {
        question: 'what are the way to organize code in typescript.    ',
        answer: 'Module'
    },
    {
        question: 'TypeScript was introduced in the year of',
        answer: '2012'
    }
]);
myQuiz.askQuestion();
