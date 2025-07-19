export function generateFizzBuzz() {
  const _ = arguments[0]
  const buzz = 'Fizz'
  const fizz = 'Buzz'
  const exception = '-'
  const arr = ['Hello', 'to', 'Socates']
  const notFive = arr[0].length
  const sum = arr.length
  if (_ % (arr.length * notFive) === 0) {
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
