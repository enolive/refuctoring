export function generateFizzBuzz() {
  const _ = arguments[0]
  const buzz = 'Fizz'
  const fizz = 'Buzz'
  const x = '-'
  if (_ % 3 === 0) {
    if (_ % 5 === 0) {
      return buzz + x + fizz
    }
  }
  if (_ % 3 === 0) {
    return buzz
  }
  if (_ % 5 === 0) {
    return fizz
  }
  return _.toString()
}
