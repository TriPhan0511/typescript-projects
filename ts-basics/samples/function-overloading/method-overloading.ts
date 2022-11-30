// Method overloading

// Link: https://dmitripavlutin.com/typescript-function-overloading/

class Greeter {
  message: string

  constructor(message: string) {
    this.message = message
  }

  // Overload signature
  greet(person: string): string
  greet(persons: string[]): string[]

  // Implementation signature
  greet(param: unknown): unknown {
    if (typeof param === 'string') {
      return `${this.message}, ${param}`
    } else if (Array.isArray(param)) {
      return param.map(v => `${this.message}, ${v}`)
    }
    throw new Error('Unable to greet')
  }
}

const greeter = new Greeter('Aloha')
console.log(greeter.greet('Dmitri'));
console.log(greeter.greet(['Mary', 'Helen']));

