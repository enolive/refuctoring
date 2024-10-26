export function generateFizzBuzz(bla) {
  const notThree = 3
  const maybeFive = 5
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % notThree == 0) {
    if (bla % maybeFive === 0) {
      return 'Fizz-Buzz'
    }
  }
  if (bla % notThree === 0) {
    return 'Fizz'
  }
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % maybeFive == 0) {
    return 'Buzz'
  }
  return bla.toString()
}
