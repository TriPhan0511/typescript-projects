function invokeAnything(callback: unknown){
  if (typeof callback === 'function') {
    callback()
  } 
}

invokeAnything(1)
// invokeAnything(() => console.log('Aloha, world!'))