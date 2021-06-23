const questions = document.getElementById('questions')
const choices = document.getElementsByClassName('choice-text');

let currentQuestion = {};
// creates delow before answer input
//let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(questions)
    getNewQuestion();
};

getNewQuestion = () => {

    //if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
      //  return window.location.assign() 
     // alert('you answered all the questions')
   // }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;
};

choices.forEach(choice =>{
    choice.addEventListener( "click", e => {

       // acceptingAnswer = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
      console.log(selectedAnswer == currentQuestion.answer);
      getNewQuestion()
    })
});



startGame()