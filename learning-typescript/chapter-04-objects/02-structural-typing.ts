//  Structural Typing
// type WithFirstName = {
//   firstName: string
// }

// type WithLastName = {
//   lastName: string
// }

// const hasBoth = {
//   firstName: 'Lucille',
//   lastName: 'Clifton'
// }

// let withFirstName: WithFirstName = hasBoth
// let withLastName: WithLastName = hasBoth

// console.log(withFirstName.firstName);
// -------------------------------------------------------------------------

// // 1. Usage Checking
// type FirstAndLastNames = {
//   first: string,
//   last: string
// }

// const hasBoth: FirstAndLastNames = {
//   first: 'Alex',
//   last: 'Ferguson'
// }

// const hasOnlyOne: FirstAndLastNames = {
//   first: 'Peter'
// }
// // Error: Property 'last' is missing in type '{ first: string; }' but required in type 'FirstAndLastNames'.

// type TimeRange = {
//   start: Date
// }

// const hasStartString: TimeRange = {
//   start: '1897-02-13'
// }
// // Error: Type 'string' is not assignable to type 'Date'.
// -------------------------------------------------------------------------

// // 2. Excess Property Checking
// type Poet = {
//   born: number,
//   name: string
// }

// const poetMatch: Poet = {
//   born: 1928,
//   name: 'Maya Angelou'
// }

// // const extraProperty: Poet = {
// //   activity: 'walking',
// //   born: 1935,
// //   name: 'Mary Oliver'
// // }
// // // Error: Type '{ activity: string; born: number; name: string; }' is not assignable to type 'Poet'.
// //   // Object literal may only specify known properties, and 'activity' does not exist in type 'Poet'.

// const existingObject = {
//   activity: 'walking',
//   born: 1935,
//   name: 'Mary Oliver'
// }

// const extraPropertyButOk: Poet = existingObject // OK
// console.log(extraPropertyButOk);
// -------------------------------------------------------------------------

// 3. Nested Object Types
// type Poem = {
//   author: {
//     firstName: string,
//     lastName: string
//   },
//   name: string
// }

// // OK
// const poemMatch: Poem = {
//   author: {
//     firstName: 'Sylvia',
//     lastName: 'Plath'
//   },
//   name: 'Lady Lazarus'
// }

// // const poemMismatch: Poem = {
// //   author: {
// //     name: 'Sylvia Plath'
// //   }
// //   ,
// //   name: 'Tulip'
// // }
// // // Error: Type '{ name: string; }' is not assignable to type '{ firstName: string; lastName: string; }'.
// // // Object literal may only specify known properties, and 'name' does not exist in type '{ firstName: string; lastName: string; }'.

// type Author = {
//   firstName: string,
//   lastName: string
// }

// type Poem = {
//   author: Author,
//   name: string
// }

// // OK
// const poemMatch: Poem = {
//   author: {
//     firstName: 'Sylvia',
//     lastName: 'Plath'
//   }, 
//   name: 'Lady Lazarus'
// }

// // const poemMismatch: Poem = {
// //   author: {
// //     name: 'Sylvia Plath'
// //   },
// //   name: 'Tulips'
// // }
// // // Erro: Type '{ name: string; }' is not assignable to type 'Author'.
// // // Object literal may only specify known properties, and 'name' does not exist in type 'Author'.
// -------------------------------------------------------------------------

// 4. Optional Properties
// type Book = {
//   author?: string,
//   pages: number
// }

// const ok: Book = {
//   author: 'Rita Dove',
//   pages: 800
// }

// // const missing: Book = {
// //   author: 'Rita Dove',
// // }
// // // Error: Property 'pages' is missing in type '{ author: string; }' but required in type 'Book'.

// // OK
// const anotherMissing: Book = {
//   pages: 700
// }

type Writers = {
  author: string | undefined,
  editor?: string
}

// OK: author is provided as undefined
const missingOk: Writers = {
  author: undefined
}

// const missingNotOk: Writers = {}
// // Error: Property 'author' is missing in type '{}' but required in type 'Writers'.

