// type Artwork = {
//   genre: string,
//   name: string
// }

// type Writing = {
//   pages: number,
//   name: string
// }

// type WrittenArt = Artwork & Writing
// // Equivalent to:
// // {
// //   genre: string,
// //   name: string,
// //   pages: number
// // }

// const writtenArt: WrittenArt = {
//   genre: 'Romantic',
//   name: 'Hello, world!',
//   pages: 10
// }
// ----------------------------------------------------------

type ShortPoem = { author: string } & (
  | { kigo: string, type: 'haiku' }
  | { meter: string, type: 'villanelle' }
)

// OK
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  type: 'haiku',
  kigo: 'Morning Glory'
}

// const oneArt: ShortPoem = {
//   author: 'Elizabeth Bishop',
//   type: 'villanelle',
// }
// Error:
// Type '{ author: string; type: "villanelle"; }' is not assignable to type 'ShortPoem'.
//   Type '{ author: string; type: "villanelle"; }' is not assignable to type '{ author: string; } & { meter: string; type: "villanelle"; }'.
//     Property 'meter' is missing in type '{ author: string; type: "villanelle"; }' but required in type '{ meter: string; type: "villanelle"; }'.