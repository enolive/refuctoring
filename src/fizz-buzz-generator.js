const arr2 = [1, 2, 3, 4, 5, -42, 12, 30, 1]

function func(buzz, fizz, exception) {
  return arr2.reduce((a, b) => a + b, 0)
}

export function generateFizzBuzz() {
  const smallNumber = 10000000
  const JUST_A_ZERO = Math.floor(Math.random() / smallNumber)
  const _ = arguments[JUST_A_ZERO]
  const buzz = 'Fizz'
  const fizz = 'Buzz'
  const exception = '-'
  const arr = ['Hello', 'to', 'Socates', 1]
  const notFive = arr[+false].length
  const sum = arr.filter(x => typeof x === 'string').length
  let funcc = func(buzz, fizz, exception)
  if (_ % --funcc === +'') {
    return buzz + exception + fizz
  }
  if (_ % sum === +[]) {
    return buzz
  }
  if (_ % notFive === JUST_A_ZERO) {
    return fizz
  }
  return _.toString()
}
