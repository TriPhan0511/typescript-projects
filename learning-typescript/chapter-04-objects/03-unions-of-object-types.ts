// // 1. Inferred Object-Type Unions
// const poem = Math.random() > 0.5
//   ? { name: 'The Double Image', pages: 7 }
//   : { name: 'Her Kind', rhymes: true }

// console.log(poem.name);
// console.log(poem.pages);
// console.log(poem.rhymes);
// ------------------------------------------------------------------

// 2. Explicit Object-Type Unions
// type PoemWithPages = {
//   name: string,
//   pages: number
// }

// type PoemWithRhymes = {
//   name: string,
//   rhymes: boolean
// }

// type Poem = PoemWithPages | PoemWithRhymes

// const poem: Poem = Math.random() > 0.5
//  ? { name: 'The Double Image', pages: 7 }
//  : { name: 'Her Kind', rhymes: true }

// // OK
// poem.name

// // // Error: Property 'pages' does not exist on type 'Poem'.
// //   // Property 'pages' does not exist on type 'PoemWithRhymes'.
// // poem.pages

// // // Error: Property 'rhymes' does not exist on type 'Poem'.
// //   // Property 'rhymes' does not exist on type 'PoemWithPages'.
// // poem.rhymes
 
// poem?.rhymes
// ------------------------------------------------------------------

// // 3. Narrowing Object Types
// type PoemWithPages = {
//   name: string,
//   pages: number
// }

// type PoemWithRhymes = {
//   name: string,
//   rhymes: boolean
// }

// type Poem = PoemWithPages | PoemWithRhymes

// const poem: Poem = Math.random() > 0.5
//   ? { name: 'The Double Image', pages: 7 }
//   : { name: 'Her Kind', rhymes: true }

// if ("pages" in poem) {
//   // poem.pages // Ok: poem is narrowed to PoemWithPages
//   console.log(poem.pages);
  
// } else {
//   // poem.rhymes // Ok: poem is narrowed to PoemWithRhymes
//   console.log(poem.rhymes);
// }  

// // if (poem.pages) {
  
// // }
// // // Error: Property 'pages' does not exist on type 'Poem'.
// //   // Property 'pages' does not exist on type 'PoemWithRhymes'.
// ------------------------------------------------------------------

// 4. Discriminated Unions
type PoemWithPages = {
  name: string,
  pages: number,
  type: 'pages'
}

type PoemWithRhymes = {
  name: string,
  rhymes: boolean,
  type: 'rhymes'
}

type Poem = PoemWithPages | PoemWithRhymes

const poem: Poem = Math.random() > 0.5
  ? {name: 'The Double Image', pages: 7, type: 'pages'}
  : {name: 'Her Kind', rhymes: true, type: 'rhymes'}

if (poem.type === 'pages') {
  console.log(`It's got pages: ${poem.pages}.`);
} else {
  console.log(`It rhymes ${poem.rhymes}`);
}  

poem.type
poem.pages