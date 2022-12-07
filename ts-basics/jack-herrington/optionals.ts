// Optional Parameters
// Optional Fields
// Optional Callbacks

// // Optional Parameters
// function printIngredient(quantity: string, ingredient: string, extra?: string) {
//   console.log(`${quantity} ${ingredient} ${extra ? extra : ''}`);
// }
// printIngredient('1C', 'Flour')
// printIngredient('1C', 'Suger', 'something more')
// -------------------------------------

// // Optional Fields
// interface User {
//   id: string,
//   info?: {
//     email?: string
//   }
// }

// function getEmail(user: User): string {
//   if (user.info) {
//     return user.info.email!
//   }
//   return ''
// }

// function getEmailEasy(user: User): string {
//   return user?.info?.email ?? ''
// }
// -------------------------------------

// Optional Callbacks
function addWithCallback(x: number, y: number, callback?: () => void){
  console.log([x,y]);
  callback?.()
}

addWithCallback(1, 2, () => console.log('Hello'))
addWithCallback(5, 6)