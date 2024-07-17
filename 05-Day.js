//day-5 17/7/24

// Task1: write a function to check if a number is even or odd and log the result to the console

function checkfuction(num) {
  if (num % 2 === 0) {
    console.log("number is:" + "even");
  } else {
    console.log("number is:" + "odd");
  }
}
checkfuction(3);
checkfuction(4);

//Task2: write a function to calculte the square of a number and return the result

function square(num) {
  return num * num;
}
let result = square(5);
console.log(result);

//Task3: write a function expression and find the maximum of two number and log the result
let max = function (a, b) {
  if (a > b) return a;
  else return b;
};
console.log(max(5, 6));

// Task4: write a function expression to concatenate two string and return the result
let concat = function (a, b) {
  return a + b;
};
console.log(concat("chai", "code"));

// Task5: write an arrow function to calculate the sum of two number and return the result
const sum = () => {
  return 5 + 6;
};
console.log(sum());

// Task6: write an arrow function to check if a string contains a specific chracter and return a boolea value
const check = (str, chr) => {
  return str.includes(chr);
};
console.log(check("chai", "a"));
console.log(check("code", "f"));

// Task7: write a function that takes two parameter and return their product. provide a default value for the second parameter
const product = (a, b = 1) => {
  return a * b;
};
console.log(product(5));
console.log(product(5, 6));

// Task8:write a function that takes a person's name and age andd return a greeting message.provide a default value for the age
const greeting = (name, age = 18) => {
  return `Hello ${name} you are ${age} years old`;
};
console.log(greeting("chai"));

// Task9: write a higher-order function that take a function and a number. and calls the function that many times.

const higherOrder = (func, num) => {    
    for (let i = 0; i < num; i++) {
        func();
    }
};   

const sayHello = () => {
    console.log("Hello");
    };
    higherOrder(sayHello, 5);

// Task 10: write a higher order function that takes two functions and a value , applies the first function to the value and then applies the second function to the result
const higherOrder2 = (func1, func2, value) => {
    return func1(func2(value)); //1st func2 call hoga or uski value func1 mein pass hogi
    };
    const add = (a) => {
        return a + 5;
        };
        const multiply = (a) => {
            return a * 5;
            };
            console.log(higherOrder2(add, multiply, 5)); //higher order phele multiply ko call krta hai then addition ko

