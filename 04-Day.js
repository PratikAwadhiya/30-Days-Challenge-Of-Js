// 04-Day 16/7/24

// Task 1 : write a program to print number from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// Task 2 : write a program to print the multiplication table of 5 using for loop
for (let i = 1; i <= 10; i++) {
  //   console.log(i + "*" + 5 + "=" + i*5);
  // console.log(i*5);
}

//Task 3: write a program to calculate the sun of number from 1 to 10 using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
  // console.log(sum); //understanding concept of working of while loop
}
// console.log(sum);

// Task 4: write a program to print number from 10 to 1 using a while loop
let k = 10;
while (k >= 1) {
  // console.log(k);
  k--;
}

// Task 5: write a program to print number from 1 to 5 using do while loop

let j = 1;
do {
  // console.log(j);
  j++;
} while (j <= 5);

// Task 6: write a program to calculate the factorial of a number using do..whuile loop
// 5! = 5*4*3*2*1 = 120

let number = 5;
let factorial = 1;

let l = 1;

do {
  factorial *= l;
  l++;
} while (l <= number);

console.log("factorial of " + number + " is:" + factorial);

// Task 7: write a program to print a pattern using nested for loop

let n = 5; //number of rows

for (let i = 1; i <= n; i++) {
  let str = "";

  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  //   console.log(str);
}

//Task 8: write a program to print number from 1 to 10 but skip the number 5 using the continue statement
let m = 1;
while (m <= 10) {
  if (m == 5) {
    m++;
    continue; //here 5 == 5 condition true hote hi current iteration end hoga or clg(m) skip ho jayega
    //or 5 ki jgh increment value 6 print hoga .then loop aage work krega
  }
  //   console.log(m);
  m++; //print incremet value of true condition not print the true condition number
}

// Task 9 : write a program to print number from 1 to 10 , but stop the loop
//when the number is 7 using break statement.

let s = 1;
while (s <= 10) {
  if (s == 7) {
    break;
  }
//   console.log(s);
  s++;
}

// while-loop print the number 1 to 10

let p = 1;

while(p<=10)
{
    console.log(p);
    p++;
}