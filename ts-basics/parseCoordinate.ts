// Function Overloading

interface Coordinate {
  x: number,
  y: number
}

// Overload signatures
export function parseCoordinate(str: string): Coordinate
export function parseCoordinate(obj: Coordinate): Coordinate 
export function parseCoordinate(x: number, y: number): Coordinate

// Implementation signature
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0
  }
  if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach(str => {
      const [key, value] = str.split(':')
      coord[key as 'x' | 'y'] = parseInt(value, 10)
    })
  } else if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate)
    }
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number
    }
  }
  return coord
}

console.log(parseCoordinate(11, 22));
console.log(parseCoordinate({x: 30.5, y: 40.9}));
console.log(parseCoordinate('x:12,y:22'));





