let userName = "";
userName ? console.log(`Hello,${userName}`):console.log(`Hello!`);

const userQuestion = "Can you answer my question?";
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()*8);
let eightBall = "";

switch(randomNumber){
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
  case 4:
    eightBall = "Do not count on it";
  case 5:
    eightBall = "My sources say no";
  case 6:
    eightBall = "Outlook not so good";
  case 7:
    eightBall = "Signs point to yes";
    break;
    }

console.log(eightBall);