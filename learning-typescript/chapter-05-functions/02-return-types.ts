// // Type: (songs: string[]) => number
// function singSongs(songs: string[]) {
//   for (const song of songs){
//     console.log(`${song}`);
//   }
//   return songs.length
// }

// // Type: (songs: string[], index: number) => string | undefined
// function getSongAt(songs: string[], index: number) {
//   return index < songs.length 
//     ? songs[index]
//     : undefined
// }
// -----------------------------------------------------------------------------

// Explicitly Return Types
// function singSongsRecursive(songs: string[], count = 0): number {
//   return songs.length ? singSongsRecursive(songs.slice(1, count + 1)) : count
// }

// const singSongsRecursive = (songs: string[], count = 0): number =>
//   songs.length ? singSongsRecursive(songs.slice(1, count + 1)) : count

// console.log(singSongsRecursive([], 2));

function getSongRecordDate(song: string): Date | undefined {
  switch(song) {
    case 'Strange Fruit':
      return new Date('April 20, 1939') // OK
    // case 'Greenleeves':
    //   return "unknown" // Error: Type 'string' is not assignable to type 'Date'.
    default:
      return undefined // OK
  }
}
