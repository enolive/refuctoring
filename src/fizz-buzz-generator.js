export function generateFizzBuzz() {
  const _ = arguments[0]
  const buzz = 'Fizz'
  const fizz = 'Buzz'
  const exception = '-'
  const five = ['Hello', 'to', 'Socates'].length
  if (_ % five === 0) {
    if (_ % 5 === 0) {
      return buzz + exception + fizz
    }
  }
  if (_ % five === 0) {
    return buzz
  }
  if (_ % 5 === 0) {
    return fizz
  }
  return _.toString()
}
