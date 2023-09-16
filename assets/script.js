// asigned a div to a variable
var startButton = document.getElementById("startquiz")
var mainDiv = document.querySelector(".main")
var test = document.querySelector(".test")

var answeronebtn = document.getElementById("correctone")
var answertwobtn = document.getElementById("correcttwo")
var answerthreebtn = document.getElementById("correctthree")
var answerfourbtn = document.getElementById("correctfour")
var answerfivebtn = document.getElementById("correctfive")

var questiontwo = document.querySelector(".question-two")
var questionthree = document.querySelector(".question-three")
var questionfour = document.querySelector(".question-four")
var questionfive = document.querySelector(".question-five")
var questionsix = document.querySelector(".question-six")

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
questiontwo.setAttribute("class","question-two")
    
}
//Added event listener
answeronebtn.addEventListener("click", correctone)

// below function to hide "question-two" and show question three
function correcttwo(){
    console.log ("Clicked two!")
    questiontwo.setAttribute("class", "question-two hide")
    questionthree.setAttribute("class", "question-three")
}
//Added event listenr
answertwobtn.addEventListener("click", correcttwo)

//below function to hide "question three" and show question four
function correctthree(){
    console.log ("Click three!")
    questionthree.setAttribute("class", "question-three hide")
    questionfour.setAttribute("class", "question-four")
}
//Added event listener
answerthreebtn.addEventListener("click", correctthree)

//below function to hide "question four" and show question five
function correctfour(){
    console.log("Clicked four!")
    questionfour.setAttribute("class", "question-four hide")
    questionfive.setAttribute("class", "question-five" )
}
//Aded event listener
answerfourbtn.addEventListener("click", correctfour)

//below function to hide "question five" and show question five
function correctfive(){
    console.log("Clicked five!")
    questionfive.setAttribute("class", "question-five hide")
    questionsix.setAttribute("class", "question-six")
}
//Aded event listener
answerfivebtn.addEventListener("click", correctfive)