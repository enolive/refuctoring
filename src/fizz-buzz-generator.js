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
  const notThree = ('5' + '6' + '4').length
  const maybeFive = 5
  // noinspection EqualityComparisonWithCoercionJS
  let itsAKindOfMagic = notThree + maybeFive - 8
  if (Σωκράτης(arguments[itsAKindOfMagic], notThree)) {
    if (Σωκράτης(arguments[itsAKindOfMagic], maybeFive)) {
      return fizzBuzz.join('')
    }
  }
  itsAKindOfMagic = (notThree * maybeFive) / 15 - 1
  return Σωκράτης(arguments[itsAKindOfMagic], notThree)
    ? fizzBuzz.slice(itsAKindOfMagic, 4).join('')
    : Σωκράτης(arguments[itsAKindOfMagic], maybeFive)
    ? fizzBuzz.slice(5).join('')
    : arguments[itsAKindOfMagic].toString()
}
