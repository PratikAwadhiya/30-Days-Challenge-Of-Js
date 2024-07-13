// Day1: Variable and Data Types //13-07-24

// Task1 : Declare a variable using var, assign it number and log the value to the console.

var num = 10;
console.log(num) //output :10

// Task2: Declare a varible using let, assign it string and log the value to the console

let str = "Hello World";
console.log(str); //output : Hello World

function zero(){
    let str1 = "Hello js" //let is not access without their scope 
    console.log(str1)
}
zero();

// Task3: Declare a variable using const, assign it boolean and log the value to the console
  
    const boolean =  true 
    console.log(boolean) // output : true

//4: Create variable of different types(number,string,boolean,object,array) and log each varibale type using typeof operator.

let num1 = 20;
let s = "Shaktiman";
let c = false;
let obj = {
    name:"Doga",
    age:20
}
let arr = [1,2,45,5,67,20]

console.log(typeof num1);
console.log(typeof s);
console.log(typeof c);
console.log(typeof obj);
console.log(typeof arr); //array define as a array but their type is in object in js


//Task5: Declare a variable using let, assign it an initial value , reassign a new value  and log both value to the console

    let initialvalue = 30;
    console.log(initialvalue);

    initialvalue = 80;
    console.log("New value :", initialvalue);

 //Task6 : Try reassigning a varibale declared with const and observe the error 

    const value = 20;
    console.log(value);

    value = 30;
    console.log(value) 
    /* Error : Assignment is constent variable means 
        if we assign a varibale in const then it's final
        value can't be change .
    */

    