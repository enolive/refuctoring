import { _A } from './general-helper-utils'

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  const isDivisibleBy3 = number % 3 === 0
  const isDivisibleBy5 = number % 5 === 0
  const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5

  if (isDivisibleBy5) {
    if (isDivisibleBy15) {
      return _A(35)
    } else {
      return _A(5)
    }
  } else if (isDivisibleBy3) {
    return _A(3)
  }
  return number.toString()
}
