// 1. Array Filtering: Write a function that filters out all the even numbers from an array of integers.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(array) {
  return array.filter((number) => number % 2 !== 0);
}

console.log(filterEvenNumbers(array));

//  2. Object Manipulation: Given an array of objects representing people with names and ages, write a function to find the person with the highest age.
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 20 },
];

function findOldestPerson(people) {
  return people.reduce((oldest, person) => {
    return (oldest.age || 0) > person.age ? oldest : person;
  }, {});
}

console.log(findOldestPerson(people));

// 3. Data Transformation: Convert an array of strings containing numbers into an array of actual number values.
const array_of_strings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function convertStringArrayToNumberArray(array) {
  return array.map(Number); // or array.map(string => parseInt(string));
}

console.log(convertStringArrayToNumberArray(array_of_strings));

// 4. Array Sorting: Write a function that sorts an array of objects based on a specific property (e.g., 'price') in ascending order.
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 200 },
];

function sortProductsByPrice(products) {
  return products.sort((a, b) => a.price - b.price); // ascending order
  // return products.sort((a, b) => b.price - a.price); // descending order
}

console.log(sortProductsByPrice(products));

// 5. Array Manipulation: Write a function that removes the first and last elements from an array and returns the modified array.
const sample_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstAndLastElements(array) {
  return array.slice(1, -1);
}

console.log(removeFirstAndLastElements(sample_array));

// 6. Object Iteration: Given an object representing a shopping cart with items and their quantities, write a function that calculates the total cost of the items.
const shopping_cart = {
  laptop: { price: 1000, quantity: 1 },
  smartphone: { price: 500, quantity: 2 },
  tablet: { price: 300, quantity: 3 },
  smartwatch: { price: 200, quantity: 4 },
};

function calculateTotalCost(cart) {
  return Object.values(cart).reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

console.log(calculateTotalCost(shopping_cart));

// 7. Object Manipulation: Write a function that deep clones an object (i.e., copies all nested objects and arrays) to prevent unintended mutations.
const original_object = {
  a: 1,
  b: { c: 2, d: 3 },
  e: [4, 5, 6],
};

function deepCloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const cloned_object = deepCloneObject(original_object);

console.log(cloned_object);

// 8. Object Iteration: Given an object representing a student's grades in various subjects, calculate their average grade.
const student_grades = {
  math: 90,
  science: 80,
  history: 85,
  geography: 75,
};

function calculateAverageGrade(grades) {
  const total = Object.values(grades).reduce((sum, grade) => sum + grade, 0);
  return total / Object.keys(grades).length;
}

console.log(calculateAverageGrade(student_grades));

// 9. Scope and Closure: Create a function that returns a new function. The returned function should remember and log the number of times it's been called.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(`The function has been called ${count} times.`);
  };
}

const counter = createCounter();
counter();
counter();
counter();
counter();

// 10. Array Sorting: Write a function that sorts an array of objects based on a chosen property in descending order.
const events = [
  { name: "Event 1", date: "2021-01-01", cost: 1000 },
  { name: "Event 2", date: "2021-03-01", cost: 200 },
  { name: "Event 3", date: "2021-02-01", cost: 150 },
  { name: "Event 4", date: "2021-04-01", cost: 250 },
];

// write a function that can sort by date
function sortObjectsByProp(array, prop) {
  return array.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
}

console.log(sortObjectsByProp(events, "date"));

// 11. Array Methods: Given an array of strings, filter out all the strings with a length less than 5 characters.
const strings = ["apple", "banana", "kiwi", "orange", "mango", "strawberry"];

function filterStringsByLength(array, length) {
  return array.filter((string) => string.length >= length);
}

console.log(filterStringsByLength(strings, 5));

// 13. Object Iteration: Write a function that counts the number of occurrences of each word in a given string and stores the results in an object.
const text =
  "This is a sample text with several words. This is another sample text with some different words.";

function countWords(text) {
  const words = text.replaceAll(".", "").split(" ");
  return words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});
}

console.log(countWords(text));
