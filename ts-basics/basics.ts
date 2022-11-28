// // Primitive types: string, boolean, number, regex
// let userName: string = 'Jack'
// let hasLoggedIn: boolean = true
// let myNumber: number = 10
// let myRegex: RegExp = /foo/

// userName += ' Herrington'
// console.log(userName)
// ----------------------------------

// // Array
// const names: string[] = userName.split(' ')
// names.forEach((e) => console.log(e))

// // Array
// const myValues: Array<number> = [1, 2, 3]
// console.log(myValues)
// ----------------------------------

// // Object
// const myPerson: {
//   first: string
//   last: string
// } = {
//   first: 'Jack',
//   last: 'Herrington',
// }
// ----------------------------------

// // Interface
// interface Person {
//   first: string
//   last: string
// }

// const myPerson: Person = {
//   first: 'Alex',
//   last: 'Ferguson',
// }
// console.log(myPerson)
// ----------------------------------

// // Record
// const ids: Record<number, string> = {
//   10: 'a',
//   20: 'b',
// }
// ids[30] = 'c'
// console.log(ids[40])
// ----------------------------------

// // Conditionals & Expressions
// const ids: Record<number, string> = {
//   10: 'a',
//   20: 'b',
// }
// ids[30] = 'c'

// if (ids[30] === 'D') {
//   console.log('Right')
// } else {
//   console.log('Wrong')
// }
// ----------------------------------

// Loops
// for loop
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// // foreach
// [1, 2, 3].forEach((e) => console.log(e))

// // map
// const out = [4, 5, 6].map((v) => v * 10)
// console.log(out)
// ----------------------------------

// let userName: string = 'Jack'
// console.log(userName)
// userName = 'Alex'
// console.log(userName)

// // const hasLoggedIn: boolean = true
// const hasLoggedIn: boolean = false
// if (hasLoggedIn) {
//   console.log('You has logged in')
// } else {
//   console.log('You has not logged in')
// }

// const age: number = 38
// // console.log(typeof age)
// if (typeof age === 'number') {
//   console.log('YES')
// } else {
//   console.log('no')
// }

// const myRegex: RegExp = /foo/
// console.log(typeof myRegex);
// ------------------------------------------------------------------

// // Traversing an object

// interface User {
//   first: string
//   last: string
//   age: number
//   hasLoggedIn: boolean
// }

// const peter: User = {
//   first: 'Peter',
//   last: 'Pan',
//   age: 15,
//   hasLoggedIn: false,
// }

// type ObjectKey = keyof typeof peter
// const mappedPeter: string[] = Object.keys(peter).map((key) => {
//   const k = key as ObjectKey
//   return `${key}: ${peter[k]}`
// })
// console.log(mappedPeter)
// // -> [ 'first: Peter', 'last: Pan', 'age: 15', 'hasLoggedIn: false' ]
// ------------------------------------------------------------------

// Record<Keys, Type>
// Constructs an object type whose property keys are Keys and whose property values are Type.
// This utility can be used to map the properties of a type to another type.

// // Example 1:
// const re: Record<number, string> = {
//   10: 'ten',
//   20: 'twenty',
//   30: 'thirty',
// }

// console.log(re[10]) // ten
// console.log(re[20]) // twenty
// ---------------------------

// // Example 2:
// interface CatInfo {
//   age: number
//   breed: string
// }

// type CatName = 'miffy' | 'boris' | 'mordred'

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: 'Persian' },
//   boris: { age: 5, breed: 'Maine Coon' },
//   mordred: { age: 16, breed: 'British Shorthair' },
// }

// console.log(cats.boris) // -> { age: 5, breed: 'Maine Coon' }
// console.log(cats.boris.age) // -> 5
// console.log(cats.boris.breed) // -> Maine Coon
// ------------------------------------------------------------------

// Tuple
// Tuple types allow us to express an array with a fixed number of elements
// whose types are known, but need not be the same.
//
// let myTuple: [string, string, number] = ['Alex', 'Ferguson', 60]
// console.log(myTuple) // ->[ 'Alex', 'Ferguson', 60 ]
// console.log(myTuple[0]) // -> Alex
// console.log(myTuple[2]) // -> 60
// -----------------------------

// Readonly Tuple
// A good practice is to make your tuple readonly:
// let tuple: readonly [string, string, number] = ['Peter', 'Pan', 15]
// -----------------------------

// Named tuple allow us to provide context for our values at index
// const graph: [x: number, y: number] = [55.2, 41.3]
// console.log(graph[0]) // -> 55.2



