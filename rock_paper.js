

let a = require("readline-sync");

let b = ['rock', 'paper', 'scissors'];
let randomMoveOfComputer = b[Math.floor(Math.random() * b.length)];

let d= a.question("What is your name: ")
console.log("hi "+ d )
console.log("choose any move in rock paper scissors")
let c = a.question("Which move you want to do? ");

if (c == randomMoveOfComputer){
console.log("Match Draw");
}
else if(c =="rock" && randomMoveOfComputer == "paper"){
console.log("computer won the match");
}
else if(c=="rock" && randomMoveOfComputer == "scissors"){
console.log(d+" Won the match");
}
else if(c=="scissors" && randomMoveOfComputer == "rock"){
console.log("computer won the match");
}
else if(c=="scissors" && randomMoveOfComputer == "paper"){
console.log(d+" Won the match");
}
else if(c=="paper" && randomMoveOfComputer == "rock"){
console.log(d+" Won the match");
}
else if(c=="paper" && randomMoveOfComputer == "scissors"){
console.log("computer won the match");
}

