const myArray = ["snake", "water", "gun"];
let userScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
  const value = prompt("Enter the value from Snake, Water, Gun");
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  if (value.toLowerCase() == "snake") {
    if (randomElement == "snake") {
      i--;
    } else if (randomElement == "water") {
      userScore++;
    } else {
      computerScore++;
    }
  } else if (value.toLowerCase() == "water") {
    if (randomElement == "water") {
      i--;
    } else if (randomElement == "gun") {
      userScore++;
    } else {
      computerScore++;
    }
  } else if (value.toLowerCase() == "gun") {
    if (randomElement == "gun") {
      i--;
    } else if (randomElement == "water") {
      userScore++;
    } else {
      computerScore++;
    }
  }
  //   console.log("Chances left = " + (10 - i).toString);
  console.log("comouter score = " + computerScore);
  console.log("UserScore score = " + userScore);
}
if (computerScore > userScore) {
  document.write("Computer Wins");
} else if (userScore > computerScore) {
  document.write("Congratulations you are the Winner");
}
