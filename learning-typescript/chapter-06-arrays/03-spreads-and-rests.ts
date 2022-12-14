// // 1. Spread

// // Type: string[]
// const names = ['David', 'Alice']

// // Type: number[]
// const numbers = [10, 99.99]

// // Type: (string | number)[]
// const conjoined = [...names, ...numbers]
// -----------------------------------------------------------

// 2. Spreading Rest Parameters

function logWarriors(greeting: string, warriors: string[]){
  for (const warrior of warriors){
    console.log(`${greeting}, ${warrior}`);
  }
}

const names = ['Cathay William', 'Lozen', 'Nzinga']
logWarriors('Welcome', names)

const birthYears = [1990, 2000, 2001]
logWarriors('Welcome', birthYears)
// Error: Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
  // Type 'number' is not assignable to type 'string'.
