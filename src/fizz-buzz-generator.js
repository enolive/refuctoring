export function generateFizzBuzz(bla) {
  const notThree = 3
  const maybeFive = 5
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % notThree == 0) {
    if (bla % maybeFive === 0) {
      return 'Fizz-Buzz'
    }
  }
  return bla % notThree === 0
    ? 'Fizz'
    : bla % maybeFive == 0
    ? 'Buzz'
    : bla.toString()
}
