# Exerice - Simple Data collector and Simple Calculator

### Goal

#### Create a program that logs user input and make some simple calculations in the console.

### Purpose

#### Understand variables, operators and basic functions in JavaScripts

## Exercise 1

#### Use `prompt` to ask the user for their name. Save this to a variable and use `console.log()` to show a welcome-message that includes their name.

```js
const userName = prompt("Enter your name");
console.log(userName);
```

## Exercise 2

#### Use `prompt` to ask the user for their birth year. Save this to a variable.

```js
const birthYear = prompt(`Hello ${userName}! When are you born?`);
```

## Exercise 3

#### Calculate the users age from subtracting their birth year from this current year with `Date().getFullYear()`. Save the result in a variable and use `console.log()` to show a message that includes their age.

```js
const d = new Date();
const age = d.getFullYear() - window.parseInt(birthYear);
console.log(
  `If you're not so sure about ${userName}, you are ${age} years old.`
);
```

## Exercise 4

#### Use `prompt` to ask the user for 2 numbers. Save them in variables.

```js
const numbersString = prompt("Enter two numbers");
const numbersArr = numbersString.split(" ");
const nr1 = parseInt(numbersArr[0]);
const nr2 = parseInt(numbersArr[1]);
```

## Exercise 5

#### Use the operatorns +, -, \*, and / to perform addition, subtraction, multiplication and division on these numbers. Use `console.log()` to show the result of these operations.

```js
for (let x = 1; x <= 4; x++) {
  if (x === 1) {
    console.log(`${nr1} + ${nr2} = ${nr1 + nr2}`);
  } 
  else if (x === 2) {
    console.log(`${nr1} - ${nr2} = ${nr1 - nr2}`);
  } 
  else if (x === 3) {
    console.log(`${nr1} * ${nr2} = ${nr1 * nr2}`);
  } 
  else {
    console.log(`${nr1} / ${nr2} = ${nr1 / nr2}`);
  }
}
```

## Exercise 6

#### Use `alert` to inform the user that the calculation is done and that can see the result in the console.
```js
alert("Calculations completed. Check result in the console.")
```