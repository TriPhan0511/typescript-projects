// const poet = {
//   born: 1935,
//   name: 'Mary Oliver',
// }

// // poet['born'] // Type: number
// // poet.name // Type: string
// // poet.end // Property 'end' does not exist on type '{ born: number; name: string; }'.
// -----------------------------------------------------------------

// // 1. Declaring Object Types
// let poetLater: {
//   born: number,
//   name: string
// }

// poetLater = {
//   born: 1935,
//   name: 'Mary Oliver'
// }

// poetLater = 'Sappho' // Error: Type 'string' is not assignable to type '{ born: number; name: string; }'.
// -----------------------------------------------------------------

// // 2. Aliased Object Types
// type Poet = {
//   born: number,
//   name: string
// }

// let poetLater: Poet

// poetLater = {
//   born: 1935,
//   name: 'Mary Oliver',
// }

// // poetLater = 'Mary Oliver' // Error: Type 'string' is not assignable to type 'Poet'.

