// Day-03:CONTROLE STRUCTURE 15/07/24

// Task 1: write a program to check if a number is positive,negative or zero and log the result to the console.

function checknumber(number) {
  if (number > 0) {
    console.log("The number is positive");
  } else if (number < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}

const number = 2;
checknumber(number);

// Task 2: write a program to cehck if is eligible to vote (age>=18) and log the result to the console

function checkvote(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}
checkvote(12);

// Task 3: write a program to find the largest of three number using nested if-else statement.

function largest(a, b, c) {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is larger number`);
    } else {
      console.log(`${c} is larger number`);
    }
  } else {
    if (b > c) {
      console.log(`${b} is larger number`);
    } else {
      console.log(`${c} is larger number`);
    }
  }
}

const a = 50;
const b = 10;
const c = 30;
largest(a, b, c);

//Task 4: write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console
function dayofweek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    default:
        console.log("Sunday");
      break;
  }
}

dayofweek(1);

//Task 5: write aprogram that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console
function grade(score) {
    let grade;
  switch (true) {
    case (score >=90):
    grade = "A";
    console.log("A");
      break;
    case (score >=80):
      grade = "B";
      console.log("B");
      break;
    case (score >=70):
    grade = "C"
      console.log("C");
      break;
    case (score >=60):
        grade ="D"
      console.log("D");
      break;
    default:
    grade ="F"
      console.log("F");
      break;
  }
}
 grade(40);


 //Task 6: write a program that uses the ternary operator to check if anumber is even or odd and log the result to the console.
// "divisible by 2 with no remainder is called even otherwise is called odd"
function check(number){
    let result = (number % 2 === 0) ? "even" : "odd";
    console.log(`the number ${number} is ${result}`)
}
check(3);


// Task 7: write a program to check if a year is a leap year using multiple condition (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} ek leap year hai.`);
    } else {
        console.log(`${year} ek leap year nahi hai.`);
    }
}

// Example usage
checkLeapYear(2020);
    