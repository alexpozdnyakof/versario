function sum(x: number, y: number){
  return x + y
}

function multiply(x: number, y: number){
  return x * y
}

function divide(x: number, y: number){
  return x/y
}

function concat(x: string, y: string){
  return x.concat(y)
}

function identity<T>(x: T): T { return x }

function inverse(x: number) { return x * -1 }

export { sum } 
