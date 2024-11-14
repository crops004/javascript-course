// es6+

// arrow function

function myFunction(input) {
  return input + 1;
}

const myNewFunction = (input) => input + 1;

// Ternary operator ?

let friends = ['frank', 'joe', 'jane', 'jill'];

let isJoeFriend = friends.includes('joe') ? true : false;

// if (friends.includes('joe')) {
//   isJoeFriend = true;
// } else {
//   isJoeFriend = false;
// }

console.log(isJoeFriend);

// optional chaining

const jane = {
    hobbies: {
        skiing: {
            pairs_of_skis: 2
        }
    }
}

console.log(jane.hobbies.skiing.pairs_of_skis); // 2
console.log(jane?.hobbies?.football?.boots); // undefined

// object destructuring

let person = {
    name: 'Alice',
    age: 30
}

const { name, age } = person;

console.log(name, age); // Alice

// array destructuring

let oldArray = [1, 2, 3];

// let value1 = oldArray[0];
// let value2 = oldArray[1];

let [value1, value2] = oldArray;

console.log(value1, value2); // 1 2

// template literal string

let namer = 'Alice';

// ` in place of ' or "
// multiline strings
let greeting = `Hello, my name is ${namer} and the sum of 1 + 1 is ${1 + 1}`;


// short circuit evaluation && ||

// AND &&

let person_dict = {name: 'Alice', age: 30};

let person_name_2 = person_dict.name && person_dict.name.toUpperCase();

let person_name_3 = person_dict.name || 'default name';

// enhanced object literals

let breed = 'poodle';
let animal = 'dog';

const animal_info = {
    breed,
    animal
}

// spread operator

let demo_array = [1, 2, 3];
let demo_array_2 = [...demo_array, 4, 5, 6];

let demo_object = {name: 'Alice', age: 30};
let demo_object_2 = {...demo_object, location: 'USA'};

let new_object = {...demo_object, age: 31};

// array methods

let numbers = [1, 2, 3, 4, 5, 88, 44 , 22, 11, 33];

// for each

numbers.forEach((number, index) => {
    console.log(`the current value is ${number} and the index is ${index}`);
});

// map
let new_array = numbers.map((number, index) => {
    return number * 2;
});

console.log(new_array);

// filter 
let filtered_array = numbers.filter((number) => {
    return number > 10;
});

// reduce
let reduced_array = numbers.reduce((accumulator, current_value, current_index) => {
    return accumulator + `, ${current_value}:${current_index}`;
}, '');

console.log(reduced_array);

