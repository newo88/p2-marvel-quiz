const questions = document.getElementById('questions')
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 


let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//CONSTANTS
const CORRECT_BONUS = 1;
let MAX_QUESTIONS = 8;



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...ironmanQuiz];
    getNewQuestion();
};

getNewQuestion = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    MAX_QUESTIONS = 5;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswer = true;
};

choices.forEach(choice =>{
    choice.addEventListener( "click", e => {
    const  selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
      console.log(selectedAnswer == currentQuestion.answer);

      if (selectedAnswer == currentQuestion.answer){
        console.log("correct");
    }else if (selectedAnswer !== currentQuestion.answer)
    console.log("incorrect");

  
      getNewQuestion()
    })
    
});




startGame()