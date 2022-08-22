
const options = ["rock", "paper", "scissors"];
const random = Math.floor(Math.random() * options.length);
computerchoice = options[random];
let userchoice = prompt('enter your choice');
console.log(userchoice);
console.log(computerchoice);
if (computerchoice == "rock" && userchoice == "paper") {
    console.log("YOU WIN!!!");
} else if (computerchoice == "paper" && userchoice == "scissors") {
    console.log("YOU WIN!!!");
} else if (computerchoice == "scissors" && userchoice == "rock") {
    console.log("YOU WIN!!!");
} else if (computerchoice === userchoice) {
    console.log("its a draw!!!")
} else {
    console.log("YOU LOSS!!!")
}

playAgain = prompt('play again?')

while( playAgain = yes){
    
}