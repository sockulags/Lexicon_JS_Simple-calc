const userName = prompt("Enter your name");
console.log(userName);
const birthYear = prompt(`Hello ${userName}! When are you born?`);

const d = new Date();
const age = d.getFullYear() - window.parseInt(birthYear);
console.log(`If you're not so sure about ${userName}, you are ${age} years old.`);

const numbersString = prompt("Enter two numbers");

const numbersArr = numbersString.split(" ");

const nr1 = parseInt(numbersArr[0]);
const nr2 = parseInt(numbersArr[1]);

for (let x = 1; x <= 4; x++) {
  if (x === 1) console.log(`${nr1} + ${nr2} = ${nr1 + nr2}`);
  else if (x === 2) console.log(`${nr1} - ${nr2} = ${nr1 - nr2}`);
  else if (x === 3) console.log(`${nr1} * ${nr2} = ${nr1 * nr2}`);
  else console.log(`${nr1} / ${nr2} = ${nr1 / nr2}`);
}

alert("Calculations completed. Check result in the console.")