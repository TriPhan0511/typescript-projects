function addNumbers(a:number, b:number):number {
  return a + b
}

export const addStrings = (s1: string, s2: string = ''): string => `${s1} ${s2}`

export const format = (title: string, param: string | number): string => `${title} ${param}`

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

export default addNumbers

// Promise Functions
const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`)

// Rest Parameters
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(', ')}`
}

// Typescript enforces types at compile time (not at run time)
export function getName(user: {first: string, last: string}): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`
}
