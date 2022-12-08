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