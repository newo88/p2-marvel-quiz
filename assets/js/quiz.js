const questions = document.getElementById('questions');
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 
let currentQuestion = {};
let score = document.getElementById("score");
let questionCounter = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 4;
let buttons = document.getElementsByClassName("buttons")
let correct = document.getElementById("correct");
let gameArea = document.getElementById("gamearea")
let answered = document.getElementById("answered");
let startQuiz = document.getElementById("start-quiz");
let timeLeft = document.getElementById("timeleft")
let count = 5;

gameArea.style.display = "none";
answered.style.display = "none";

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button")
    
    for (let button of buttons){
        button.addEventListener("click", function(){
            gameArea.style.display = "grid";
            startQuiz.style.display = "none";
           if(this.getAttribute("data-type") === "ironman"){
            availableQuesions = [...ironmanQuiz];
            startGame()
          
           }else if (this.getAttribute("data-type") === "thor"){ 
            availableQuesions = [...americaQuiz];
           startGame();
          
           } else if (this.getAttribute("data-type") === "captainAmerica"){
            availableQuesions = [...thorQuiz]; 
            startGame();
            
         } 
 

        });

    }
});



/**
 * The start game function. This is called when the user selects their hero.
 */

function startGame() {
      questionCounter = 0;
      score = 0;
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
/**
 * Increments number of correct answers
 */
function correctAnswers(){
    let correct = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++correct;


//  Prints a message to the user when they are finsh the quiz depending on the number of correct answer they got.  
 

if (correct >=8 ){
    document.getElementById("end-message").innerHTML = `Congragulations you are Worthy to possess Thors Hammer`;
}else if(correct >= 6){
    document.getElementById("end-message").innerHTML = `Well done you are nearly there try again`;
}else if(correct >= 4){
    document.getElementById("end-message").innerHTML = `HMMMMM are you sure your a marvel fan?`;
}else if(correct >= 2){
    document.getElementById("end-message").innerHTML = `You need to hit the Comics and freshen up`;
}
}


/**
 * Generates a new Question for the user at random.
 * When the user hits the max number of questions,
 * displays the total correct answers and returns them
 * to the index page.
 */
function getNewQuestion() {
if(availableQuesions.length === 10 || questionCounter >= MAX_QUESTIONS){
    answered.style.display = "block";
    gameArea.style.display = "none";
    setTimeout(() => {
        return window.location.assign("index.html")
        
     }, 5000);
    
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


/**
 * Check the users answer with the answer assigned to the question.
 * if the correct answer is selected it will flash green
 * if incorrect answer is selected it will  flash red
 * When the user answers the answeredQuestions function is 
 * called and adds 1 to answered questions.
 * then a new question is called.
 */
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
   
     
    });
   
});

}


