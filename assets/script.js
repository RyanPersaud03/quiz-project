// asigned a div to a variable
var startButton = document.getElementById("startquiz")
var mainDiv = document.querySelector(".main")
var test = document.querySelector(".test")

var answeronebtn = document.getElementById("correctone")


var answertwobtn = document.getElementById("correcttwo")
var questiontwo = document.querySelector(".question-two")

var questionthree = document.querySelector(".question-three")

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
    console.log ("Clickedtwo!")
    questiontwo.setAttribute("class", "question-two hide")
    questionthree.setAttribute("class", "question-three")
}
//Added event listenr
answertwobtn.addEventListener("click", correcttwo)