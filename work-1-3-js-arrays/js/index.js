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

// task 7 - given an array [1, 2, 3, 4, 5]. Using the slice method, record new elements [1, 2, 3].

const numsArr = [1, 2, 3, 4, 5]
console.log(numsArr.slice(0, 3))

// task 8 - given an array [1, 2, 3, 4, 5]. Using the splice method, convert the array to [1, 4, 5].

const listNums = [1, 2, 3, 4, 5]
listNums.splice(1, 2)
console.log(listNums)

// task 9 - given an array [1, 2, 3, 4, 5]. Using the splice method, convert the array to [1, 2, 10, 3, 4, 5].

const arrNums = [1, 2, 3, 4, 5]
arrNums.splice(2, 0, 10)
console.log(arrNums)

// task 10 - given an array [3, 4, 1, 2, 7]. Sort it.

const arr3 = [3, 4, 1, 2, 7]
arr3.sort()
console.log(arr3)

// task 11 - given an array with elements 'Hello,', 'world!'. Display the phrase "Hello, world!".

let greeting = ['Hello,', 'world!']
let joinedGreeting = greeting.join(" ")
console.log(joinedGreeting)


