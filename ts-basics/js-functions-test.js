const { getName } = require('./functions')

console.log(getName())
console.log(getName({}))
console.log(getName({ first: 'a' }))
console.log(getName({ last: 'b' }))
console.log(getName({ first: 'a', last: 'b' }))
