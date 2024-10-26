export function generateFizzBuzz(bla) {
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % 3 == 0) {
    if (bla % 5 === 0) {
      return 'Fizz-Buzz'
    }
  }
  if (bla % 3 === 0) {
    return 'Fizz'
  }
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % 5 == 0) {
    return 'Buzz'
  }
  return bla.toString()
}
