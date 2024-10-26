export function generateFizzBuzz(bla) {
  if (bla % 3 == 0) {
    if (bla % 5 === 0) {
      return 'Fizz-Buzz'
    }
  }
  if (bla % 3 === 0) {
    return 'Fizz'
  }
  if (bla % 5 == 0) {
    return 'Buzz'
  }
  return bla.toString()
}
