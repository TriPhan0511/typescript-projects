// 1. Void Return

// function logSong(song: string | undefined): void {
//   if (!song) {
//     return // OK
//   }
//   console.log(song);
//   return true // Error: Type 'boolean' is not assignable to type 'void'.
// }

// let songLogger: (song: string) => void
// songLogger = (song) => {
//   console.log(song);
// }

// songLogger('Heart Of Glass')
// -----------------------------------------------------------------------------------

// 2. Never Returns