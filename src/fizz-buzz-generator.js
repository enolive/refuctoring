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

export function generateFizzBuzz() {
  const notThree = 3
  const maybeFive = 5
  const bla2 = arguments[0]
  // noinspection EqualityComparisonWithCoercionJS
  if (Σωκράτης(bla2, notThree)) {
    if (Σωκράτης(bla2, maybeFive)) {
      return fizzBuzz.join('')
    }
  }
  return Σωκράτης(bla2, notThree)
    ? fizzBuzz.slice(0, 4).join('')
    : Σωκράτης(bla2, maybeFive)
    ? fizzBuzz.slice(5).join('')
    : bla2.toString()
}
