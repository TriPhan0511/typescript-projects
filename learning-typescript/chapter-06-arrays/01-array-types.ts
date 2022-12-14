// const arr = ['Hello', 'Aloha']
// arr.push('Good morning') // OK
// // arr.push(true) // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
// -------------------------------------------------------------------

// let arrayOfNumbers: number[]
// arrayOfNumbers = [4,8,15,16,23,42]
// -------------------------------------------------------------------

// // 1. Array and Function Types

// // Type is a function that return an array of strings
// let createStrings: () => string[]

// // Types is an array of functions that eacj return a string
// let stringCreators: (() => string)[]
// -------------------------------------------------------------------

// // 2 Union-Type Arrays

// // Type is either a string or an array of numbers
// let stringOrArrayOfNumbers: string | number[]

// // Type is an array of elements that are each either a number or a string
// let arrayOfNumbersOrStrings: (number | string)[]

// // Type is (string | undefined)[]
// const namesMaybe = [
//   'Alice', 
//   'Peter',
//   undefined
// ]
// -------------------------------------------------------------------

// // 3. Evolving Any Arrays

// // Type: any[]
// let values = []

// // Type: string[]
// values.push('') 

// // Type: (number | string)[]
// values.push(10)
// -------------------------------------------------------------------

// 4. Multidimensional Arrays

let arrayOfArraysOfNumbers: number[][]
arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

