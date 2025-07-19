const arr2 = [1, 2, 3, 4, 5, -42, 12, 30, 1]

function func() {
  return arr2.reduce((a, b) => a + b, 0)
}

function calculate(_, funcc, buzz, exception, fizz, sum, notFive, JUST_A_ZERO) {
  let y = 0
  for (let i = 0; i < 101; i++) {
    if (y === 0) {
      if (_ % --funcc === +'') {
        return buzz + exception + fizz
      }
    }
    y++
  }
  if (y === 101) {
    if (_ % sum === +[]) {
      return buzz
    }
  }
  if (_ % notFive === JUST_A_ZERO) {
    return fizz
  }
  return _.toString()
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
  return calculate(_, funcc, buzz, exception, fizz, sum, notFive, JUST_A_ZERO)
}
