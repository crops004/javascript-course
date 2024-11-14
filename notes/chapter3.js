// Data manipulation

const { addStuff, example_array } = require("./chapter2")

let example_sentence = 'this is a string'

let string_length = example_sentence.length

//console.log('Value at the end of the string is', example_sentence[string_length - 1])

let combined_string = 'hello world' + ' ' + 'my name is Joe'
combined_string = '3' + 5

//console.log('Combined string:', combined_string)

const contains_the_letter_a = example_sentence.indexOf('a')
//console.log('Contains the letter a:', contains_the_letter_a)

const contains_split = example_sentence.split(' ')
//console.log('Split string:', contains_split)

const includes = example_sentence.includes('a')
//console.log('Includes the letter a:', includes)

example_sentence = 'this_is_a_string'
const replace = example_sentence.replaceAll('_', ' ')
//console.log('Replaced string:', replace)

const slice = example_sentence.slice(0, 4)
//console.log('Sliced string:', slice)
const slice2 = example_sentence.slice(5)
//console.log('Sliced string:', slice2)


// regex

// array and lists
let simple_array =  ['james', 'is', 'super', 'cool']  // 1 dimensional array

// crud - create, read, update, delete
//console.log(simple_array[1])

simple_array[1] = 'is not'
//console.log(simple_array)

// pop push shift unshift
simple_array.push('cools')   
//console.log(simple_array)

simple_array.pop()
//console.log(simple_array)

simple_array.unshift('frank')
//console.log(simple_array)

simple_array.shift()
//console.log(simple_array)

// join
const joined = simple_array.join(' ')
//console.log('Joined:', joined)

// reverse
simple_array.reverse()
//console.log('Reversed:', simple_array)

simple_array.sort()
//console.log('Sorted:', simple_array)

// multidimensional array
let nested_array = [[[3]], [[]], [[]], [[]]] // 4 dimensional array
//console.log(nested_array[0][0][0])

let nested_array2 = [[1, 2], [4, 5]]
for (let i = 0; i < nested_array2.length; i++) {
    for (let j = 0; j < nested_array2[i].length; j++) {
        //console.log(i ,j, nested_array2[i][j])
    }
}

let new_array = [1 ,2 ,3 ,4 ,5 ,11 ,7 ,8 ,9 ,10]
let index_of_eleven = new_array.indexOf(11)
let sub_array1 = new_array.slice(0, index_of_eleven)
let sub_array2 = new_array.slice(index_of_eleven + 1)

let new_filtered_array = sub_array1.concat(sub_array2)
//console.log('Filtered array:', new_filtered_array)

// dictionary or object
const my_bio = {
    name: 'Joe',
    age: 25,
    hobbies_or_interests: ['reading', 'coding', 'gaming']
}

let name = my_bio['name']
my_bio['name'] = 'Joe Cropsey'
console.log(my_bio)

my_bio['number of friends'] = 0
console.log('location' in my_bio)

my_bio.age = 26
console.log(my_bio)

delete my_bio['number of friends']
console.log(my_bio)

const bio = {
    name: 'Joe',
    age: 25,
    hobbies_or_interests: ['reading', 'coding', 'gaming'],
    friends: {
        'juan': {
            age: 26,
            hobbies: ['tech', 'science', 'math']
        },
    }
}

bio['friends']['juan']['age'] = 27
console.log(bio)

const keys_in_object = Object.entries(bio)
console.log(keys_in_object)

// console.log(bio.joke)

addStuff(1, 2)
console.log(example_array)

// error handling and debugging
const brokenObject = {
    word: 'nice'
}

function problematicCodeBlokc() {
    try {
        console.log('Attempted the try block')
        const sub_object = brokenObject.hello.word
        console.log(sub_object)
    } catch (err) {
        console.error('There was an error: ', err)
    }


}

// problematicCodeBlokc()

function throwError() {
    throw new Error('This is an error')
}

throwError()

