// let yearAndWarrior: [number, string]

// // OK
// yearAndWarrior = [530, 'Tomyris']

// yearAndWarrior = [false, 'Peter']
// // Error: Type 'boolean' is not assignable to type 'number'.

// yearAndWarrior = [530]
// // Error: Type '[number]' is not assignable to type '[number, string]'.
//   // Source has 1 element(s) but target requires 2.
// -------------------------------------------------------------

// // year type: number
// // warrior type: string
// const [year, warrior] = Math.random() > 0.5
//   ? [530, 'Tomyris']
//   : [600, 'Peter']
// -------------------------------------------------------------

// 1. Tuple Assignability

// // type: (number | boolean)[]
// // const pairLoose = [false, 123]

// const pairTupleLoose: [boolean, number] = pairLoose
// // Error: Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
//   // Target requires 2 element(s) but source may have fewer.

// type BooleanAndNumberTuple = [boolean, number]
// const pairLoose: BooleanAndNumberTuple = [false, 200]
// const pairTupleLoose: BooleanAndNumberTuple = pairLoose
// console.log(pairTupleLoose);

// const tupleThree: [boolean, number, string] = [true, 100, 'hello']

// // OK
// const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]]

// const tupleTwoExtra: [boolean, number] = tupleThree
// // Error: Type '[boolean, number, string]' is not assignable to type '[boolean, number]'.
//   // Source has 3 element(s) but target allows only 2.
// -----------------------------------------------------------------

// // Tuples as rest parameters
 
// function logPair(name: string, value: number){
//   console.log(`${name} ${value}`);
// }

// // const pairArray = ['Alex', 20]
// // logPair(...pairArray)
// // // Error: A spread argument must either have a tuple type or be passed to a rest parameter.

// const pairTuple: [string, number] = ['Alex', 20]
// logPair(...pairTuple) // OK
// -----------------------------------------------------------------

// 2. Tuple Inferences

// // type: (string | number)[]
// function firstCharAndSize(input: string) {
//   return [input[0], input.length]
// }

// // firstChar type: string | number
// // size type: string | number
// const [firstChar, size] = firstCharAndSize('Gudit')
// -----------------------------------------------------------------

// // Explicit tuple types
// function firstCharAndSizeExplicit(input: string): [string, number] {
//   return [input[0], input.length]
// }

// // firstChar type: string
// // size type: number
// const [firstChar, size] = firstCharAndSizeExplicit('Gudit')
// -----------------------------------------------------------------

// Const asserted tuples: as const

// // type: (string | number)[]
// const unionArray = [1157, 'Tomoe']

// // type: readonly [1157, "Tomoe"]
// const readonlyTuple = [1157, 'Tomoe'] as const

// const pairMutable: [number, string] = [1157, 'Tomoe']
// pairMutable[0] = 2000

// // const pairAlsoMutable: [number, string] = [1157, 'Tomoe'] as const
// // Error: The type 'readonly [1157, "Tomoe"]' is 'readonly' and cannot be assigned to the mutable type '[number, string]'.

// const pairConst = [1157, 'Tomoe'] as const
// pairConst[0] = 1000
// // Error: Cannot assign to '0' because it is a read-only property.
// -----------------------------------------------------------------

// type: readonly [string, number]
function firstCharAndSizeConst(input: string) {
  return [input[0], input.length] as const
}

// firstChar type: string
// size type: number
const [firstChar, size ] = firstCharAndSizeConst('Hello')