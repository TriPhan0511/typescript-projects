// let nothingInGivesString: () => string

// let inputAndOutput: (songs: string[], count?: number) => number
// ------------------------------------------------------------------------

// const songs = ['Juice', 'Shake It Off', "What's up"]

// function runOnSongs(callback: (index: number) => string) {
//   for (let i = 0; i < songs.length; i++) {
//     console.log(callback(i));
//   }
// }

// function getSongAt(index: number) {
//   return `${songs[index]}`
// }
// runOnSongs(getSongAt) // OK

// function logSong(song: string) {
//   return `${song}`
// }
// runOnSongs(logSong)
// // Error: Argument of type '(song: string) => string' is not assignable to parameter of type '(index: number) => string'.
//   // Types of parameters 'song' and 'index' are incompatible.
//   // Type 'number' is not assignable to type 'string'.
// ------------------------------------------------------------------------

// // 1. Function Type Parentheses

// // Type is a function that returns a union: string | undefined
// let returnsStringOrUndefined: () => string | undefined

// // Type is either undefined or a function that returns a string
// let maybeReturnsString: (() => string) | undefined
// ------------------------------------------------------------------------

// 2. Parameter Type Inferences

// let singer: (song: string) => string  

// singer = function(song) {
//   return `Singing: ${song.toUpperCase()}!` // OK
// }

// console.log(singer('Heal the world'));

// const songs = ['Call Me', 'Jolene', 'The Chain']

// songs.forEach((song, index) => {
//   console.log(`${song} is at index ${index}`);
// })
// ------------------------------------------------------------------------

// 3. Function Type Aliases

// type StringToNumber = (input: string) => number
// let stringToNumber: StringToNumber
// stringToNumber = (i) => i.length // OK
// stringToNumber = (i) => i.toUpperCase() 
// // Error: Type 'string' is not assignable to type 'number'.

type NumberToString = (input: number) => string

function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is ${numberToString(1234)}`);
}

usesNumberToString((input) => `Hooray ${input}`) // OK

usesNumberToString((input) => input * 2) 
// Error: Type 'number' is not assignable to type 'string'.

