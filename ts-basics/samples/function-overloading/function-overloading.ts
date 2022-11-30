// Function overloading

// Link: https://dmitripavlutin.com/typescript-function-overloading/

// Overload signatures
export function greet(person: string): string
export function greet(persons: string[]): string[]

// Implementation signature
export function greet(person: unknown): unknown {
  if (typeof person === 'string') {
    return `Aloha, ${person}`
  } else if (Array.isArray(person)) {
    return person.map(v => `Aloha, ${v}`)
  }
  throw new Error('Unable to greet.')
}

console.log(greet('Alex'));
console.log(greet(['Peter', 'Mary']));



