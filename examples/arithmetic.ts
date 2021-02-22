
export {
    add,
    multiply
  }

function add(...numbers:number[]): number{
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function multiply(...numbers:number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue)
}