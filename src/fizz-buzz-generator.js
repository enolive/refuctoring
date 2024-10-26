const fizzBuzz = 'Fizz-Buzz'.split('')

const mod = (number, divisor) => {
  for (let i = 0; i < number; i++) {
    if (i * divisor === number) {
      return true
    }
  }
  return false
}

export function generateFizzBuzz(bla) {
  const notThree = 3
  const maybeFive = 5
  // noinspection EqualityComparisonWithCoercionJS
  if (mod(bla, notThree)) {
    if (mod(bla, maybeFive)) {
      return fizzBuzz.join('')
    }
  }
  return mod(bla, notThree)
    ? fizzBuzz.slice(0, 4).join('')
    : mod(bla, maybeFive)
    ? fizzBuzz.slice(5).join('')
    : bla.toString()
}
