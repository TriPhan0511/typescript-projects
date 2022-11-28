// Function Parameters
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback()
}
// ---------------------------------

type MutationFunction = (v: number) => number

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
  return numbers.map(mutate)
}

// arrayMutate([1, 20, 30], (v) => v * 10).forEach(e => console.log(e))
// ---------------------------------



// Return Functions

type AdderFunction = (val: number) => number

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val
}

const addTen = createAdder(1)
console.log(addTen(5)); // 6


