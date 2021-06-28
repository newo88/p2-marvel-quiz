const questions = document.getElementById('questions');
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 
//const correctIncorrect = document.getElementById("correct-incorrect");
let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 5;


document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "ironman"){
                return window.location.assign("quiz.html");
                startGame();
            }else {
                let gameType = this.getAttribute("data-type")
                alert(`Unknow game ${gameType}`)
            }
        })
    }
})




function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...ironmanQuiz];
    getNewQuestion();
}



function getNewQuestion() {
if(availableQuestions.length === 5 || questionCounter >= MAX_QUESTIONS){
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

     const classToApply = 
     selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
     selectedChoice.parentElement.classList.add(classToApply);
     setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
       
     }, 1000);
   
    });
    
});

}


checkAnswer();

startGame();

