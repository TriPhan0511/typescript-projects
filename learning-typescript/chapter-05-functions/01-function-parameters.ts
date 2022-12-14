// // 1. Required Parameters
// function singTwo(first: string, second: string) {
//   console.log(`${first} / ${second}`);
// }

// // OK
// // singTwo('Hello', 'World')

// // singTwo('Ball and Chained')
// // // Error: Expected 2 arguments, but got 1.

// // singTwo('One', 'Two', 'Three')
// // // Error: Expected 2 arguments, but got 3.
// ------------------------------------------------------------------------

// // 2. Optional Parameters
// function anounceSong(song: string, singer?: string){
//   console.log(`Song: ${song}`);
//   console.log(`Singer: ${singer}`);
//   if (singer) {
//     console.log(`Singer: ${singer}`);
//   }
// }

// anounceSong('Heal the World') // OK
// anounceSong('Heal the World', undefined) // OK

// anounceSong('Chandelier', 'Sia')
// // Song: Chandelier
// // Singer: Sia
// ------------------------------------------------------------------------

// // 3. Default Parameters
// function rateSong(song: string, rating = 0) {
//   console.log(`${song} gets ${rating}/5 stars!`);
// }

// rateSong('Hello') // Hello gets 0/5 stars!
// rateSong('Hello', undefined) // Hello gets 0/5 stars!
// rateSong('Hello', 5) // Hello gets 5/5 stars!

// rateSong('Good', 'evening')
// // Argument of type 'string' is not assignable to parameter of type 'number'.
// ------------------------------------------------------------------------

// // 4. Rest Parameters
// function singAllTheSongs(singer: string, ...songs: string[]) {
//   for (const song of songs){
//     console.log(`${song}, by ${singer}`);
//   }
// }

// // OK
// singAllTheSongs('Alicia Keys')
// singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face')

// // singAllTheSongs('Lady Gaga', 2000)
// // // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
