function func(buzz, fizz, exception) {
  return 15
}

export function generateFizzBuzz() {
  const _ = arguments[0]
  const buzz = 'Fizz'
  const fizz = 'Buzz'
  const exception = '-'
  const arr = ['Hello', 'to', 'Socates', 1]
  const notFive = arr[0].length
  const sum = arr.filter(x => typeof x === 'string').length
  const fifteen = func(buzz, fizz, exception)
  if (_ % fifteen === 0) {
    return buzz + exception + fizz
  }
  if (_ % sum === 0) {
    return buzz
  }
  if (_ % notFive === 0) {
    return fizz
  }
  return _.toString()
}
