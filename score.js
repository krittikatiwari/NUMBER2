// Iteration 8: Making scoreboard functional
let score = localStorage.getItem("score");
var scoreBoard= document.getElementById("score-board");
scoreBoard.innerHTML=score;


const playAgain=document.getElementById("play-again-button")
playAgain.onclick=()=>{
    location.href="./index.html";
}

