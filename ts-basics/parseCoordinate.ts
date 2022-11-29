// Function Overloading

// interface Coordinate {
//   x: number,
//   y: number
// }

// export function parseCoordinate(obj: Coordinate): Coordinate 
// export function parseCoordinate(x: number, y: number): Coordinate
// export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
//   let coord: Coordinate = {
//     x: 0,
//     y: 0
//   }
//   if (typeof arg1 === 'object') {
//     coord = {
//       ...arg1 as Coordinate
//     }
//   } else {
//     coord = {
//       x: arg1 as number,
//       y: arg2 as number
//     }
//   }
//   return coord
// }

// console.log(parseCoordinate(11, 22));
// console.log(parseCoordinate({x: 30.5, y: 40.9}));
// ---------------------------------------------------------------

interface Coordinate {
  x: number,
  y: number
}

export function parseCoordinate(obj: Coordinate): Coordinate 
export function parseCoordinate(x: number, y: number): Coordinate
export function parseCoordinate(s: string): Coordinate
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  }
  if (typeof arg1 === 'object') {
    coord = {
      ...arg1 as Coordinate
    }
  } else if (typeof arg1 === 'string') {
    let x = 0
    let y = 0
    const commaIndex = arg1.indexOf(',')
    const xIndex = arg1.indexOf('x')
    const yIndex = arg1.indexOf('y')
    if (commaIndex !== -1 && xIndex !== -1 && yIndex !== -1) {
      x = Number(arg1.slice(xIndex + 2, commaIndex))
      y = Number(arg1.slice(yIndex + 2))
      coord = {
        x,
        y
      }
    }
  }
   else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }
  return coord
}


console.log(parseCoordinate('x:12,y:22'));



