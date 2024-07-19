// ==============Objects=======19/7/24=========

// Task 1: create an object representing a book with properties like title,author,and year and log the object to the console

let book = {
  title: "30-days of challenge",
  author: "Hitesh sir",
  year: 2024,
};
// console.log(book);

//Task 2: Access and log the title and author properties of the book
let books = {
  title: "30-days of challenge",
  author: "Hitesh sir",
  year: 2024,
};
// console.log("Author:" + books.author);
// console.log("Title:" + books.title);

//============Object Methods=================
// Task 3: Add a method to the book object that returns a string with book's title and author,and log the resukt of calling this method

let book1 = {
  title: "30-days of challenge",
  author: "Hitesh sir",

  // add a method to return a string with book's title and author
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};
// console.log(book1.getDetails());

// Task 4: Add a method to the book object that take  a parameter (year) and update the book's year property,then log the updated object
let book2 = {
  title: "30-days of challenge",
  author: "Hitesh sir",
  year: 2024,
  // add a method to take a parameter (year) and update the book's year property
  updateYear: function (year) {
    this.year = year;
  },
};
book2.updateYear(2025);
// console.log(book2);

//===========Nested Objects===================

// Task 5: create a nested object representing a library with properties like name and book(an of book object)and log the library object to the console
let library = {
  name: "CodeWithHitesh",
  book: {
    title: "30-days of challenge",
    author: "Hitesh sir",
    year: 2024,
  },
};
// console.log(library);

//Task 6: Access and log the name of libaray and title of all the books in library
const libaray = {
  name: "City Library",
  book: [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  ],
};

// console.log("Library Name:" + libaray.name);
// console.log("Book Titles:");
libaray.book.forEach((book) => {
  // console.log(book.title);
});

// Task7: Add a method to the book object that uses the "this" keyword to return a string with the book's title and year and log the result of  calling this method

let book3 = {
  title: "30-days of challenge",
  author: "Hitesh sir",
  year: 2024,
  // add a method to the book object that uses the "this" keyword to return a string
  // with the book's title and year and log the result of  calling this method
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
// console.log(book3.getSummary());

// Task 8:use a for...in loop to iterate over the properties of the book object and log the each property and its value

const Book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  getTitleAndYear: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
//    console.log(Book.getTitleAndYear());

//    for(let property in Book)
//     {
//         if(Book.hasOwnProperty(property))
//             console.log(`${property}: ${Book[property]}`)
//     }

// Task 9: use Object.key and Object.values method to log all the keys and values of the book object

const bookk = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to return a string with the book's title and year
  getTitleAndYear: function () {
    return `${this.title} (${this.year})`;
  },
};

// Log all the keys of the book object
const keys = Object.keys(book);
console.log("Keys:");
keys.forEach((key) => {
  console.log(key);
});

// Log all the values of the book object
const values = Object.values(book);
console.log("Values:");
values.forEach((value) => {
  console.log(value);
});
