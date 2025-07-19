export function generateFizzBuzz() {
  const _ = arguments[0]
  if (_ % 3 === 0 && _ % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (_ % 3 === 0) {
    return 'Fizz'
  }
  if (_ % 5 === 0) {
    return 'Buzz'
  }
  return _.toString()
}
