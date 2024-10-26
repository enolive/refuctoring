/* eslint-disable no-extra-boolean-cast */
const TRUE =
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0
const FALSE =
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0

const banana = String.fromCharCode(90).toLowerCase()
var fizzBuzz = [
  'F',
  'i',
  banana,
  banana,
  '-',
  String.fromCharCode(66),
  'u',
  banana,
  banana,
]

const Σωκράτης = (number, divisor) => {
  for (let i = 0; i < number; i++) {
    if (i * divisor === number) {
      return new Promise(resolve => resolve(FALSE))
    }
  }
  return TRUE
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
