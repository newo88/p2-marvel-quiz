/*jshint esnext: true */
const questions = document.getElementById('questions');
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 
let currentQuestion = {};
let score = document.getElementById("score");
let questionCounter = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 10;
let buttons = document.getElementsByClassName("buttons");
let correct = document.getElementById("correct");
let gameArea = document.getElementById("gamearea");
let answered = document.getElementById("answered");
let startQuiz = document.getElementById("start-quiz");
let timeLeft = document.getElementById("timeleft");
let timeOut = document.getElementById("timeout");
let count = 59;

gameArea.style.display = "none";
answered.style.display = "none";
timeout.style.display = "none";

document.addEventListener("DOMContentLoaded", function (){
    let buttons = document.getElementsByTagName("button");
    
    for (let button of buttons){
        button.addEventListener("click", function(){
            gameArea.style.display = "grid";
            startQuiz.style.display = "none";
           if(this.getAttribute("data-type") === "ironman"){
            availableQuestions = [...ironmanQuiz];
           
            startGame();
          
           }else if (this.getAttribute("data-type") === "thor"){ 
            availableQuestions = [...thorQuiz];
           startGame();
          
           } else if (this.getAttribute("data-type") === "captainAmerica"){
            availableQuestions = [...americaQuiz]; 
            startGame();
            
         } else if (this.getAttribute("data-type") === "universe"){
            availableQuestions = [...marvelQuiz]; 
            startGame();
            
         } 
 

        });

    }
});



/**
 * The start game function. This is called when the user selects their hero.
 * Also starts the quiz timer. 
 */

function startGame() {
     
      questionCounter = 0;
      score = 0;
      checkAnswer();
      getNewQuestion();
      let interval = setInterval(function countDown(){
        document.getElementById('timeleft').innerHTML= count;
        count--;
         if (count === -1){
            clearInterval(interval);
            gameArea.style.display = "none";
            timeOut.style.display ="block";
            answered.style.display = "block";
           setTimeout(() => {
                return window.location.assign("index.html");
                
             }, 5000);
        } else if (questionCounter >= MAX_QUESTIONS + 1){
            clearInterval(interval); 
        }            
      }, 1000);
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
    document.getElementById("end-message").innerHTML = `Congragulations YOUR A TRUE MARVEL FAN`;
}else if(correct >= 6){
    document.getElementById("end-message").innerHTML = `WELL DONE YOUR NEARLY THERE TRY AGAIN`;
}else if(correct >= 4){
    document.getElementById("end-message").innerHTML = `HMMMMM ARE YOU SURE YOUR A MARVEL FAN?`;
}else if(correct >= 2){
    document.getElementById("end-message").innerHTML = `YOU NEED TO HIT THE COMICS AND FRESHEN UP`;
}
}

/**
 * Generates a new Question for the user at random.
 * When the user hits the max number of questions,
 * displays the total correct answers and returns them
 * to the index page.
 */
function getNewQuestion() {
if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
    answered.style.display = "block";
    gameArea.style.display = "none";
    setTimeout(() => {
        return window.location.assign("index.html");
        
     }, 5000);   
}
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
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




