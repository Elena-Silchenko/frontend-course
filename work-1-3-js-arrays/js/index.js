// task 1 - two arrays are given: ['a', 'b', 'c'] and [1, 2, 3]. Combine them together.

const arr1 = ['a', 'b', 'c']
const arr2 = [1, 2, 3]

const newArr =arr1.concat(arr2)
// const newArr = [...arr1, ...arr2]
console.log(newArr)

// task 2 - given an array ['a', 'b', 'c']. Add elements 1, 2, 3 to the end.

const arr3 = ['a', 'b', 'c']
arr3.push(1, 2, 3)
// const arr = [1, 2, 3]
// arr3.push(...arr)
console.log(arr3)

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

const arr4 = [3, 4, 1, 2, 7]
arr3.sort((a, b) => a - b)
console.log(arr4)

// task 11 - given an array with elements 'Hello,', 'world!'. Display the phrase "Hello, world!".

let greeting = ['Hello,', 'world!']
let joinedGreeting = greeting.join(' ')
console.log(joinedGreeting)

// task 12 - given an array ['Hello, 'world!']. It is necessary to write in the zero element of this array the word 'Bye,' (that is, instead of the word 'Hello,' there will be 'Bye,').

let message = ['Hello,', 'world!']
// message.splice(0, 1, 'Bye,')
message[0] = 'Bye,'
console.log(message.join(' '))

// task 13 - create an array arr with elements 1, 2, 3, 4, 5 in two different ways.

const arr = [1, 2, 3, 4, 5]
const arr5 = new Array(1, 2, 3, 4, 5)
// const arr6 = new Array(5).map((_empty, index) => 1 + index)
console.log(arr5)

// task 14 - Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.

const arr6 = ['a', 'b', 'c', 'd']
console.log(`${arr6[0]} + ${arr6[1]}, ${arr6[2]} + ${arr6[3]}`)

// task 15 - Given a multidimensional array arr7. Print the word 'blue'

const arr7 = {
  'ua':['блакитний', 'червоний', 'зелений'],
  'en':['blue', 'red', 'green'],
}
console.log(arr7['en'][0])
console.log(arr7.en[0])

const matrix = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33],
]

let sum = 0;
for (let i = 0; i < 3; i++) {
  let row = matrix[i];
  for (let j = 0; j < 3; j++) {
    sum += row[j];
  }
}
console.log(sum)