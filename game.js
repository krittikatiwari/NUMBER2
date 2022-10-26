// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 =Math.floor(Math.random()*100);
const number1box=document.getElementById("number1");



let number2 =Math.floor(Math.random()*100);
const number2box=document.getElementById("number2");


// Iteration 3: Creating variables required to make the game functional
var score=0;
var operator;
const plus = document.getElementById("plus");
const  minus =document.getElementById("minus");
const multiply = document.getElementById("mul");
const div = document.getElementById("divide");
const modulus = document.getElementById("modulus");


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3box = document.getElementById("number3");
var number3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    number1=Math.floor(Math.random()*100)
    number2=Math.floor(Math.random()*100)
    if(number1<number2){
        var num =number1;
        number1=number2;
        number2=num;
    }
    operator = Math.floor(Math.random()*5);
    switch (operator) {
        case 1:
            number3=number1 + number2 ;
            break;
        case 2:
            number3 = number1-number2;
            break;
        case 3:
            number3 = number1*number2;
            break;
        case 4:
            number3 = Math.floor(number1/number2);
            console.log("number3",number3)
            break;
        case 5:
            number3 = number1%number2;
            break;
        case 0:
            randomise();    

    }

  number1box.innerHTML = number1;
  number2box.innerHTML = number2;
  number3box.innerHTML = number3;

console.log(number1 + " " + number2 + " " + number3 + " " + operator);
 }

randomise();
// Iteration 6: Making the Operators (button) functional

plus.onclick = () => {
    if ( (number1 + number2) == number3) {
        console.log("plus")
      score++;
      console.log(score)
      randomise();
      resetTime(timerId);
    } else {
        location.href="./gameover.html";
    }
  };
minus.onclick = () =>{
    if(number1 - number2 == number3){
      score++;
      console.log(score)
      randomise();
      resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
  };
multiply.onclick = () =>{
    if(number1 * number2 == number3){
      score++;
      console.log(score)
      randomise();
      resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
  };
div.onclick = () =>{
    if(Math.floor(number1 / number2) == number3){
      score++;
      console.log(score)
      randomise();
      resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
  };
modulus.onclick = () =>{
    if(number1%number2 == number3){
      score++;
      console.log(score)
      randomise();
      resetTime(timerId);
    }
    else{
        location.href="./gameover.html";
    }
  };


// Iteration 7: Making Timer functional
var time = 20;
var timer=document.getElementById("timer");
var timerId;
function startTimer(){
    time=20;
    timer.innerHTML=time;
    timerId=setInterval(()=>{
        time--;
        if(time==0){
            location.href="./gameover.html"
        }
        timer.innerHTML = time;


    },1000)
    localStorage.setItem("score",score)
}
function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}
startTimer();
