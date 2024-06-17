// alert ('Hello World');

// let myBoolean = confirm ("ok === True\Cancel=== false");
// console.log(myBoolean);

// let name = prompt ('What is your name')
// if (name){
//   console.log(name.trim().length)
//   console.log (name.trim()) 
// } else {
//   console.log ('You didnt enter your name'); 
// } 

// let playerOne = 'rock';
// let computer = 'scissors'
// let result = playerOne === computer ? 'TieGame!' 
//   : playerOne === 'rock' && computer === 'paper' ? 'Computer Wins!' 
//   : playerOne === 'paper' && computer === 'scissors' ? 'Computer Wins!'
//   : playerOne === 'scissors' && computer === 'rock' ? 'Computer Wins!' 
//   : 'PlayerOne Wins!';
// console.log(result);
let playGame = confirm ("Do you want to play a game called rock, paper or scissors?");
  if (playGame){
    //play the game
    let playerDecision = prompt ("Please enter rock, paper or scissors");
    if (playerDecision) {
      let playerOne = playerDecision.trim().toLowerCase();
    if (
       playerOne === "rock" ||
       playerOne === "paper" || 
       playerOne === "scissors"
      ) {
      let computerPick = Math.floor(Math.random() * 3 + 1);
      let computer = computerPick === 1 ? "rock" : computerPick === 2 ? "paper" : "scissors";

      let result = playerOne === computer 
        ? "Tie Game"
        : playerOne === "rock" && computer === "scissors" 
        ? `playerOne ${playerOne} \ncomputer ${computer} \nComputer Wins!`
        : playerOne === "paper" && computer === "rock" 
        ? `playerOne ${playerOne} \ncomputer ${computer} \nComputer Wins!`
        : playerOne === "scissors" && computer === "paper" 
        ? `playerOne ${playerOne} \ncomputer ${computer} \nComputer Wins!`
        : `playerOne ${playerOne} \ncomputer ${computer} \PlayerOne Wins.`

      alert (result);
       let playAgain = confirm ("Play Again?");
      playAgain ? location.reload() : alert ("Ok, some other time");
    } else {
      alert ("You didn't enter rock, paper or scissors.")
    }
    
    }else {
      alert ("I guess you change your mind.");
    }
  }else {
    alert ("Ok, maybe next time.");
  }
