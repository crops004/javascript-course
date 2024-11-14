
// 1. How do you create a string that includes both static text and the value of the variable name, using template literals?
let namse = 'frank'
let string = `Hello, ${namse}`

// 2. Convert the following function into an arrow function syntax:
function adds(a, b) {
    return a + b;
  }

    const add = (a, b) => a + b;
  
// 3. Given an object person with properties name and age, use object destructuring to create two variables name and age, extracting the values from the object.

let person = {
    name: 'Alice',
    age: 30
}

const { name, age } = person;

// 4. Given an array colors with the values ['red', 'green', 'blue'], use array destructuring to create three variables named first, second, and third, assigning the first, second, and third elements of the array to them, respectively.

let colors = ['red', 'green', 'blue'];

let [first, second, third] = colors;

// 5. How do you create a new array combined that contains all elements of arrays arr1 and arr2 using the spread operator?

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined = [...arr1, ...arr2];


// 6. How do you create a new object combinedObject that merges the properties of two objects obj1 and obj2, with properties from obj2 overwriting those in obj1 if they exist in both objects?

let obj1 = { name: 'Alice', age: 30 };
let obj2 = { name: 'Bob', location: 'USA' };

let combinedObject = {...obj1, ...obj2};

console.log(combinedObject);



// 7. How do you safely access the street property of address inside an object user that may not exist, using optional chaining?

let user = {
    name: 'Alice',
    age: 30,
    address: {
        city: 'New York'
    }
}

let street = user.address?.street;

console.log(street); // undefined



// 8. Define a function greet(name, greeting = "Hello") that takes a name and an optional greeting. If the greeting is not provided, it should default to "Hello".

const greet = (name, greeting = "Hello") => {
    console.log(`${greeting}, ${name}`);
}

greet('Alice'); // Hello, Alice

// 9. Explain the difference between let and const keywords, and give an example of when you would use each.


// 10. Write a for...of loop that iterates over an array numbers and logs each number to the console.

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
    console.log(number);
}



// 11. Given an array of numbers, use the map method to create a new array with each number squared.

let numbers2 = [1, 2, 3, 4, 5];

let squaredNumbers = numbers2.map(number => number ** 2);0



// 12. How would you use the ternary operator to assign "adult" to a variable ageStatus if age is 18 or over, and "minor" if under 18?

let age2 = 20;

let ageStatus = age2 >= 18 ? 'adult' : 'minor';





// 13. How do you use the logical AND operator to execute a function logMessage() only if the variable isLoggedIn is true?

const logMessage = () => {console.log('User is logged in')};

let isLoggedIn = true;

isLoggedIn && logMessage();






// 14. How can you use the logical OR operator to assign a default value of "guest" to a variable username if the current user.name is undefined or null?

let user2 = {
    name: null
}

let username = user2.name || 'guest';

console.log(username); // guest
