const arr2 = [1, 2, 3, 4, 5, -42, 12, 30, 1]

function func(buzz, fizz, exception) {
  return arr2.reduce((a, b) => a + b, 0)
}

export function generateFizzBuzz() {
  const _ = arguments[0]
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
  if (_ % notFive === 0) {
    return fizz
  }
  return _.toString()
}
