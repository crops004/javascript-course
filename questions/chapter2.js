// 1.
let name = "joe";
name = "Joe Cropsey"

// 2.
let a = 5
let b = 10

console.log(a == b)

// 3. 
let age = 20
if (age > 18) {
    console.log("Adult")
} else {
    console.log("Minor")
}

(age > 18) ? console.log("Adult") : console.log("Minor")

// 4.
for (let i = 0; i <= 10; i++) {
    (i % 2 == 0) ? console.log(i) : null;
}

// 5. 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
let sum = 0
let i = 0

while (sum < 100) {
    sum = sum + array[i]
    i++
    console.log(sum)
}

// 6.
function calculateArea (length, width) {
    return length * width
}       

let testArea = calculateArea(5, 4)
console.log("The area is :", testArea)