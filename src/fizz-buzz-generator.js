const fizzBuzz = 'Fizz-Buzz'.split('')

const Σωκράτης = (number, divisor) => {
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
  if (Σωκράτης(bla, notThree)) {
    if (Σωκράτης(bla, maybeFive)) {
      return fizzBuzz.join('')
    }
  }
  return Σωκράτης(bla, notThree)
    ? fizzBuzz.slice(0, 4).join('')
    : Σωκράτης(bla, maybeFive)
    ? fizzBuzz.slice(5).join('')
    : bla.toString()
}
