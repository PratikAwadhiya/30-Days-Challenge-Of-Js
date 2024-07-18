// day-06 18/7/24 Array Concept

// Task 1: create an array of number from 1 to 5 and log the result

let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Task 2: access the first and last element of the array and log them to the console

let arry = [1, 3, 4, 5, 6, 7];

// console.log(arry[0],arry[5]);

//============== ARRAY METHODS==========

// Task3: use the push method to add a new number to the end of the arrayand log the updated array
let arry1 = [1, 2, 3, 4, 5, 6, 7];
arry1.push(8);
// console.log(arry1);

// Task 4 : use the pop method to remove the last element from the array and log the updated array

let arry2 = [1, 2, 3, 4, 5, 6, 7, 8];
arry2.pop(7);
// console.log(arry2);

// Task 5: use the shift method to remove the first element from the array  and log the updated array

let arry3 = [2, 3, 4, 5, 6, 7];
arry3.shift(); //shift() does not take any arguments.
// console.log(arry3);

//Task 6: use the unshift method to add a new number to the begining of the array and log the updated array

let arr4 = [2, 4, 5, 6, 7, 8];
arr4.unshift(10); //take any argument but add only first side.
// console.log(arr4);

//=======================ARRAY METHOD(INTERMEDIATE)===========================

//Task 7: use the map method to create a new array where each number is double and log the new array

let arr5 = [1, 2, 3, 4, 5, 6, 7];
let arr6 = arr5.map((num) => num * 2); //map() create a new array.
// console.log(arr6);

//Task 8: use the filter method to create a new array with only even number and log the result.
let arr7 = [1, 2, 3, 4, 5, 6, 7];
let arr8 = arr7.filter((num) => num % 2 == 0); //filter() array element ke hr element pr apply hota hai
// console.log(arr8);

//Task 9 : use the reduce method to calcuate the sum of all number in the array and log the result.
let arr9 = [1, 2, 3, 4, 5, 6, 7];
let arr10 = arr9.reduce((acc, curr) => acc + curr, 0); //reduce
// console.log(arr10);

/*
reduce method ko arry array pe call kiya gaya hai. 
Yeh method ek function leta hai jo array ke har element pe
 apply hota hai aur ek single value return karta hai.
  Is case me, function do parameters leta hai: accumulator aur currentValue.

   accumulator wo value hoti hai jo previous iteration ka result hoti hai
    aur currentValue current element ki value hoti hai.
    Function accumulator aur currentValue ka sum return karta hai.
    initial value 0 , accumulator ke liye set ki gyi hoti hai
*/

//==============ARRAY ITERATION========================

// Task 10: use a for loop to iterate over the array and log each element to the console
let arr11 = [1, 2, 3, 4, 5,]
for (let i = 0; i < arr11.length; i++) {
    // console.log(arr11[i]);
}
//Task 11: use foreach method to iterate over the array and log each elemnt to the console
let arr12 = [1, 2, 3, 4, 5,20,8]
// arr12.forEach((num) => console.log(num));

// Task 12: create a two dimensional array (matrix) and log the entire array to the console
let matrix = [[1, 2, 3], [4, 5,6],[11,12,13]]
// console.log(matrix);

// Task 13: access and log a specific element from the two dimensional array
let matrix1 =[
    [1, 2, 3],          
    [4, 5,6],
    [11,12,13]
]
console.log(matrix1[2][2]);

// [
//     [1, 2, 3]
//     [00],[01],[02] row or column

//     [4,5,6]
//     [10],[11],[12]

//     [11,12,13]
//     [20],[21],[22]
// ]   
