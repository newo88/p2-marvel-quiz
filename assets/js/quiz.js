const questions = document.getElementById('questions');
//Array.from() method returns an Array object from any object with a length property or an iterable object.
const choices = Array.from(document.getElementsByClassName('choice-text')); 
let currentQuestion = {};
let score = document.getElementById("score");
let questionCounter = 0;
let availableQuestions = [];
let MAX_QUESTIONS = 5;
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
           if(this.getAttribute("data-type") === "ironman"){
              gameArea.style.display = "grid";
               startQuiz.style.display = "none";
               startGameIron();
          
           }else if (this.getAttribute("data-type") === "thor"){ 
            gameArea.style.display = "grid";
            startQuiz.style.display = "none";
           startGameThor();
          
        } else if (this.getAttribute("data-type") === "captainAmerica"){ 
            gameArea.style.display = "grid";
            startQuiz.style.display = "none";
            startGameAmerica();
            
         } 
 

        });

    }
});



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

//let endMessage = document.getElementById("end-message")

//if (correctAnswers = 5){
//    endMessage.innerHTML = `Congragulations you got ${correct} you know your stuff`;
//}else{
// if (correctAnswers >= 5){
//      endMessage.innerHTML = `You only got ${correct} you need to freshen up`
//  }
//}






//let interval = setInterval(function(){
 // timeLeft.innerHTML=count;
  //count--;
 // if (count <= -1){
 //   clearInterval(count); 
//}
//},1000 );




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
        
     }, 2000);
    
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

