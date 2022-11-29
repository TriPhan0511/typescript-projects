// function addNumbers(a: number, b: number): number {
//   return a + b
// }
// console.log(addNumbers(1, 2));


// const subtractNumbers = (a: number, b: number): number => a - b
// console.log(subtractNumbers(6, 5));
// ---------------------------------------------------------------

// // Default Parameters
// export const greeting = (first: string = '', last: string = ''): string => {
//   return `Hello, ${first} ${last}`
// }
// console.log(greeting());
// console.log((greeting('Alex', 'Ferguson')));

// export const format = (title: string, param: string | number): string => `${title} ${param}`
// console.log(format('Five', 5));
// console.log(format('Six', 'seven'));


// export const printFormat = (title: string, param: string | number): void => 
//   console.log(`${title} ${param}`);
// printFormat('Eleven', 10)
// ---------------------------------------------------------------

// // Rest Parameters
// export const greeting = (first: string, ...names: string[]): string => {
//   return `Hello, ${first}${(names?.length ?? 0) === 0 ? '' : `, ${names.join(', ')}`}`
// }
// console.log(greeting('Peter'));
// console.log(greeting('Alex', 'David', 'John'));



// ---------------------------------------------------------------

// // Function Parameter
// type Mutation = (num: number) => number
// const mutate = (numbers: number[], callback: Mutation): number[] => {
//   return numbers.map(callback)
// }
// mutate([1, 2, 3], (v) => v + 10).forEach(e => console.log(e))
// ---------------------------------------------------------------

// // Function Returning
// type MyFunctionType = (num: number) => number

// const createAdder = (num: number): MyFunctionType => {
//   return (val: number) => num + val
// }

// const addTen = createAdder(10)
// console.log(addTen(5)); // 15
// ---------------------------------------------------------------

// // type User = {
// //   first: string,
// //   last: string,
// //   age: number
// // }

// interface User {
//   first: string,
//   last: string,
//   age: number
// }

// export const formatUser = (user: User): string => {
//   return `Fullname: ${user?.first ?? 'First name'} ${user?.last ?? 'Last name'} - Age: ${user?.age ?? 0}` 
// }

// // console.log(formatUser({}));
// // console.log(formatUser({first: 'Alex', last: 'Ferguson', age: 60}));
// console.log(formatUser({first: 'Peter', last: 'Pan', age: 15}));
// ---------------------------------------------------------------



