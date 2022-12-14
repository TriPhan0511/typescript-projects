// overload signature: declaring different versions of the function's name,
// parameters, and return types
// implementation signature

function createDate(timestamp: number): Date
function createDate(month: number, day: number, year: number): Date
function createDate(timestampOrMonth: number, day?: number, year?: number) {
  return day === undefined || year === undefined 
    ? new Date(timestampOrMonth)
    : new Date(year, timestampOrMonth, day)
}

createDate(554356800) // OK
createDate(7, 27, 1987) // OK

// createDate(4, 1) // Error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
