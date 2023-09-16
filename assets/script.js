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

// below function to hide quiz start screen and show question one div
function startquiz(){
mainDiv.setAttribute("class","main hide")
test.setAttribute("class","test")
    
}

//Added event listener to "startquiz" button 
startButton.addEventListener("click", startquiz)

// below function to hide quiz start screen and show question one div
function correctone(){
    console.log ("Clicked!")
    test.setAttribute("class","test hide")
questionTwo.setAttribute("class","question-two")
    
}
//Added event listener
answerOneBtn.addEventListener("click", correctone)

// below function to hide "question-two" and show question three
function correcttwo(){
    console.log ("Clicked two!")
    questionTwo.setAttribute("class", "question-two hide")
    questionThree.setAttribute("class", "question-three")
}
//Added event listenr
answerTwoBtn.addEventListener("click", correcttwo)

//below function to hide "question three" and show question four
function correctthree(){
    console.log ("Click three!")
    questionThree.setAttribute("class", "question-three hide")
    questionFour.setAttribute("class", "question-four")
}
//Added event listener
answerThreeBtn.addEventListener("click", correctthree)

//below function to hide "question four" and show question five
function correctfour(){
    console.log("Clicked four!")
    questionFour.setAttribute("class", "question-four hide")
    questionFive.setAttribute("class", "question-five" )
}
//Aded event listener
answerFourBtn.addEventListener("click", correctfour)

//below function to hide "question five" and show question five
function correctfive(){
    console.log("Clicked five!")
    questionFive.setAttribute("class", "question-five hide")
    highScores.setAttribute("class", "highscores")
}
//Aded event listener
answerFiveBtn.addEventListener("click", correctfive)
