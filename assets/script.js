// asigned a div to a variable
var startButton = document.getElementById("startquiz")
var mainDiv = document.querySelector(".main")
var test = document.querySelector(".test")

var answerOneBtn = document.getElementById("correctone")
var answerTwoBtn = document.getElementById("correcttwo")
var answerThreeBtn = document.getElementById("correctthree")
var answerFourBtn = document.getElementById("correctfour")
var answerFiveBtn = document.getElementById("correctfive")

var questionTwo = document.querySelector(".question-two")
var questionThree = document.querySelector(".question-three")
var questionFour = document.querySelector(".question-four")
var questionFive = document.querySelector(".question-five")
var highScores = document.querySelector(".highscores")

var incorrectOneBtns = document.getElementsByClassName("incorrectone")
var incorrectTwoBtns = document.getElementsByClassName("incorrecttwo")
var incorrectThreeBtns = document.getElementsByClassName("incorrectthree")
var incorrectFourBtns = document.getElementsByClassName("incorrectfour")
var incorrectFiveBtns = document.getElementsByClassName("incorrectfive")



var timeLeft =75;
var timer;
var isRunning = true
var score =0



// below function to hide quiz start screen and show question one div
function startquiz(){
mainDiv.setAttribute("class","main hide")
test.setAttribute("class","test")
 timer = setInterval(function(){
    timeLeft --; 
    document.querySelector("#time-left").textContent = timeLeft;
    if(timeLeft<=0 || !isRunning){
        clearInterval(timer)
        if (isRunning){
            alert("time up!")
        }
        isRunning=false
    }
 },1000) 
}

//Added event listener to "startquiz" button 
startButton.addEventListener("click", startquiz)

// below function to hide quiz start screen and show question one div
function correctone(){
    console.log ("Clicked!")
    score ++;
    test.setAttribute("class","test hide")
questionTwo.setAttribute("class","question-two")
    
}
//Added event listener
answerOneBtn.addEventListener("click", correctone)

// below function to hide "question-two" and show question three
function correcttwo(){
    console.log ("Clicked two!")
    score ++;
    questionTwo.setAttribute("class", "question-two hide")
    questionThree.setAttribute("class", "question-three")
}
//Added event listenr
answerTwoBtn.addEventListener("click", correcttwo)

//below function to hide "question three" and show question four
function correctthree(){
    console.log ("Click three!")
    score ++;
    questionThree.setAttribute("class", "question-three hide")
    questionFour.setAttribute("class", "question-four")
}
//Added event listener
answerThreeBtn.addEventListener("click", correctthree)

//below function to hide "question four" and show question five
function correctfour(){
    console.log("Clicked four!")
    score ++;
    questionFour.setAttribute("class", "question-four hide")
    questionFive.setAttribute("class", "question-five" )
}
//Aded event listener
answerFourBtn.addEventListener("click", correctfour)

//below function to hide "question five" and show high Scores
function correctfive(){
    console.log("Clicked five!")
    score ++;
    isRunning=false
    questionFive.setAttribute("class", "question-five hide")
    document.getElementById("UserScore").textContent=score
    document.getElementById("allhighscores").textContent= localStorage.getItem("highscores")
    highScores.setAttribute("class", "highscores")

}
//Aded event listener
answerFiveBtn.addEventListener("click", correctfive)

//below function to hide "highscores" and show mainDiv (startscreen)
var submitBtn = document.getElementById("submit")
// function submit(){
//     console.log("Clicked five!")
//     highScores.setAttribute("class", "highscores hide")
//     mainDiv.setAttribute("class", "main")
// }
//Aded event listener
submitBtn.addEventListener("click", submit)

//if all questions are answered quiz is finished
// display entered initials on highscores
var inputBox = document.getElementById("initials")
var output = document.getElementById("target")

function displayIn(){
    console.log("score is " + score)
    output.innerHTML = inputBox.value;
    UserScoreandInitials =  localStorage.getItem("highscores") + inputBox.value +":" + score + " "
    localStorage.setItem("highscores",UserScoreandInitials)
}
submitBtn.addEventListener("click", displayIn);

//added funtion to incorect buttons question one
function changeqtwo(){
     console.log ("Clicked!")
     test.setAttribute("class","test hide")
     timeLeft = timeLeft -5
     questionTwo.setAttribute("class","question-two")
 }

 // below function to hide quiz start screen and show question one div

//Added event listener
for (var i=0 ;i< incorrectOneBtns.length;i++){
    incorrectOneBtns[i].addEventListener("click",changeqtwo)
}

function changeqthree(){
     console.log ("Clicked!")
     timeLeft = timeLeft -5
     questionTwo.setAttribute("class", "question-two hide")
     questionThree.setAttribute("class", "question-three")
 }

 // below function to hide quiz start screen and show question one div

//Added event listener
for (var i=0 ;i< incorrectTwoBtns.length;i++){
    incorrectTwoBtns[i].addEventListener("click",changeqthree)
}

function changeqfour(){
    console.log ("Clicked!")
     timeLeft = timeLeft -5
     questionThree.setAttribute("class", "question-three hide")
     questionFour.setAttribute("class", "question-four" )
}
for (var i=0 ;i< incorrectThreeBtns.length;i++){
    incorrectThreeBtns[i].addEventListener("click",changeqfour)
}

function changeqfive(){
    console.log ("Clicked!")
     timeLeft = timeLeft -5
     questionFour.setAttribute("class", "question-four hide")
    questionFive.setAttribute("class", "question-five" )
}
for (var i=0 ;i< incorrectFourBtns.length;i++){
    incorrectFourBtns[i].addEventListener("click",changeqfive)
}

function changedone(){
    console.log ("Clicked!")
    isRunning=false
    questionFive.setAttribute("class", "question-five hide")
    document.getElementById("UserScore").textContent=score
    highScores.setAttribute("class", "highscores")
}
for (var i=0 ;i< incorrectFiveBtns.length;i++){
    incorrectFiveBtns[i].addEventListener("click",changedone)
}


//added funtion to incorect buttons question two

//added funtion to incorect buttons question three

//added funtion to incorect buttons question four

//added funtion to incorect buttons question five
