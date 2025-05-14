import { _FiZzBuZz } from './general-helper-utils'

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  const isDivisibleBy3 = number % 3 === 0
  const str = '' + number
  const isDivisibleBy5 = str.endsWith('0') || str.endsWith('5')
  const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5

  if (isDivisibleBy5) {
    if (isDivisibleBy15) {
      return _FiZzBuZz(35)
    } else {
      return _FiZzBuZz(5)
    }
  } else if (isDivisibleBy3) {
    return _FiZzBuZz(3)
  }
  return number.toString()
}
