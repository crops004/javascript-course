// 1. write a function to determine if a string has all unique characters. Return true if all characters are unique, and false otherwise. Assume the string only contains lowercase letters.

function hasUniqueCharacters(str) {
    let set = new Set();
    for (let char of str) {
        if (set.has(char)) {
            return false;
        }
        set.add(char);
    }
    return true;
}

// 2. Given two sorted arrays nums1 and nums2, write a function to merge them into a single sorted array.
let nums1 = [1, 9, 11];
let nums2 = [2, 5, 6];

function mergeSortedArrays(nums1, nums2) {
    let result = [...nums1, ...nums2].sort((a, b) => a - b);
    return result;
}

console.log(mergeSortedArrays(nums1, nums2));


// 3. GIven an array of inegers where 1 <= a[i] <= n (n = size of array), some elements appear twice and others appear once. Write a function that returns an array of all the elements that appear twice in the given array. You must achieve this with O(n) time complexity and O(1) space complexity.

// let nums = [4, 3, 2, 7, 8, 2, 3, 1];

function findDuplicates(nums) {
    let result = [];
    for (let num of nums) {
        let index = Math.abs(num) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        }
        nums[index] = -nums[index];
    }
    return result;
}



// rotate an array to the right by k steps, where k is non-negative.

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        let last = nums.pop();
        nums.unshift(last);
    }

    return nums;
}



console.log(rotateArray(nums, k));


// given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.

let s = "[(})]"
let s_2 = "([])[]]{}{]}"

function validParenthesis(str) {
    const combos = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    let stack = []

    for (let current_bracket of str) {
        if (stack.length === 0) {
            stack.push(current_bracket)
        } else if (current_bracket in combos) {
            stack.push(current_bracket)
        } else {
            let last_value_on_stack = stack[stack.length - 1]
            if (!(last_value_on_stack in combos)) {
                stack.push(current_bracket)
            } else {
                if (combos[last_value_on_stack] === current_bracket) {
                    stack.pop()
                }
            }
        }

    }

    return stack.length === 0
}

console.log(validParenthesis(s))