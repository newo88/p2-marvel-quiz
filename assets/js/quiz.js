const choiceA = document.getElementById("choiceA")
const choiceB = document.getElementById("choiceB")
const choiceC = document.getElementById("choiceC")
const choiceD = document.getElementById("choiceD")
const questionElement = document.getElementById("questions");
let answersElements = document.getElementsByClassName("user-choice");
let randomIndex = Math.floor(Math.random() * ironmanQuestions.length);

//document.getElementById("choiceA").addEventListener("click");






function renderQuestion(){
   
questionElement.innerHTML = ironmanQuestions[randomIndex].question;
for (let i = 0; i < answersElements.length; i++) {
    console.log(121) 
//answerElements = answersElements[0].innerHTML;
 
  choiceA.innerHTML = choiceA;
  choiceB.innerHTML = choiceB;
  choiceC.innerHTML = choiceC;
  choiceD.innerHTML = choiceD;
  console.log(choiceA)
  
}
}

renderQuestion()

