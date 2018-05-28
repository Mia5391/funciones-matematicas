let num1 = 9824
let num2 = 777
let num3 = 36325

//The code follows BODMAS convention.
const additionResult = function add() {
    return (num1 + num2);
  }

console.log("The addition result is " + additionResult());

const finalResult = function multiply() {
  return (additionResult() * num3);
  }

document.write("Final result: " + finalResult());
