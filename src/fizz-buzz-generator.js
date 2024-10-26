const fizzBuzz = 'Fizz-Buzz'.split('')

export function generateFizzBuzz(bla) {
  const notThree = 3
  const maybeFive = 5
  // noinspection EqualityComparisonWithCoercionJS
  if (bla % notThree == 0) {
    if (bla % maybeFive === 0) {
      return fizzBuzz.join('')
    }
  }
  return bla % notThree === 0
    ? fizzBuzz.slice(0, 4).join('')
    : bla % maybeFive == 0
    ? fizzBuzz.slice(5).join('')
    : bla.toString()
}
