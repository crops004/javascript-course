console.log('Hello World');

// Data Types
12334565 // number
"hello world" && 'hello world' // string
null // null
true && false // boolean
let dictionary = {Key: "Value", key: 'value'} // object
let list = [1,2,3,4,5] // array
undefined // undefined

const sentence = "Hello World"; // constant
let number_of_eggs = 12; // variable

function addStuff(x, y) { console.log( x + y )} // function

addStuff(1, 2) // invoke function

// Operators
let x = 5;
let y = 10;
let z = x + y; // addition
let za = x - y; // subtraction
let zs = x * y; // multiplication
let zd = x / y; // division
let zf = x % y; // modulus (remainder)
let zg = x ** y; // exponentiation
x == y // check if equal
x != y // check if not equal
x > y // check if greater than
x < y // check if less than
x >= y // check if greater than or equal to
x <= y // check if less than or equal to
x && y // logical AND
x || y // logical OR
!x // logical NOT
x === y // strict equality
x !== y // strict inequality

typeof x // check type of variable

// Control Structures
if (x > y) {
    console.log('x is greater than y')
} else if (x == y) {
    console.log('x is equal to y')
}
 else {
    console.log('x is less than or equal to y')
}

// for
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// while
example_array = [1,2,3,4,5]

let i = 0
let length = example_array.length

while (i < length) {
    console.log('value was true', i, example_array[i]) // print value
    i++ // increment i
}

// switch
let day = 'Friday'

switch (day) {
    case 'Monday':
        console.log('Today is Monday')
        break
    case 'Tuesday':
        console.log('Today is Tuesday')
        break
    case 'Wednesday':
        console.log('Today is Wednesday')
        break
    case 'Thursday':
        console.log('Today is Thursday')
        break
    case 'Friday':
        console.log('Today is Friday')
        break
    case 'Saturday':
        console.log('Today is Saturday')
        break
    case 'Sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('Today is not a day')
}