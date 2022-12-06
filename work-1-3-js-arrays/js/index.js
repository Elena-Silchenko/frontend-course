// task 1 - two arrays are given: ['a', 'b', 'c'] and [1, 2, 3]. Combine them together.

const arr1 = ['a', 'b', 'c']
const arr2 = [1, 2, 3]

const newArr =arr1.concat(arr2)
console.log(newArr)

// task 2 - given an array ['a', 'b', 'c']. Add elements 1, 2, 3 to the end.

const arr = ['a', 'b', 'c']
arr.push(1, 2, 3)
console.log(arr)

// task 3 - given an array [1, 2, 3]. Make it an array [3, 2, 1].

const array = [1, 2, 3]
array.reverse()
console.log(array)

// task 4 - given an array [1, 2, 3]. Add elements 4, 5, 6 to the end.

const numbers = [1, 2, 3]
numbers.push(4, 5, 6)
console.log(numbers)

// task 5 - given an array [1, 2, 3]. Add elements 4, 5, 6 to the beginning.

const nums = [1, 2, 3]
nums.unshift(4, 5, 6)
console.log(nums)

// task 6 - given array ['js', 'css', 'jq']. Display the first item on the screen.

const list = ['js', 'css', 'jq']
console.log(list[0])