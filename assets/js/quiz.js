const questions = document.getElementById('questions');
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 
let currentQuestion = {};
//let acceptingAnswer = true;
let score = document.getElementById("score");
let questionCounter = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 5;
let quizContainer = document.getElementsByClassName("quizselector")
let correct = document.getElementById("correct");
//questions.classList.add("hide")


document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button")
    for (let button of buttons){
        button.addEventListener("click", function(){
           if(this.getAttribute("data-type") === "ironman"){
             //  quizContainer.classList.add('hide')
               startGameIron();
           }else if (this.getAttribute("data-type") === "thor"){ 
           startGameThor();
        } else if (this.getAttribute("data-type") === "captainAmerica"){ 
            startGameAmerica();
         } 
 

        });

    }
})



function startGameIron() {
      questionCounter = 0;
      score = 0;
      availableQuesions = [...ironmanQuiz];
      getNewQuestion();
      checkAnswer();

}

function startGameAmerica() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...americaQuiz];
    getNewQuestion();
    checkAnswer();

}

function startGameThor() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...thorQuiz];
    getNewQuestion();
    checkAnswer();

}

/**
 * Increments the number of questions answered by the users.
 */
function answeredQuestions (){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function correctAnswers(){
    let correct = parseInt(document.getElementById("correct").innerText)
    document.getElementById("correct").innerText = ++correct;
}

function getNewQuestion() {
if(availableQuesions.length === 10 || questionCounter >= MAX_QUESTIONS){
    return window.location.assign("end.html");
}
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    

    choices.forEach( choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });


    availableQuestions.splice(questionIndex, 1);
 
}



function checkAnswer(){
    
choices.forEach(choice =>{
    choice.addEventListener( "click", e => {
    const  selectedChoice = e.target; 
    const selectedAnswer = selectedChoice.dataset.number;
    
    if (selectedAnswer == currentQuestion.answer){
        correctAnswers();
    }

    answeredQuestions();
  
     const classToApply = 
     selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
     selectedChoice.parentElement.classList.add(classToApply);
     setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
        
     }, 1000);
   
     console.log(selectedChoice, selectedAnswer)
    });
   
});

}





