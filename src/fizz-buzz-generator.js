import { getResult } from './general-helper-utils'

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  const isDivisibleBy3 = number % 3 === 0
  const isDivisibleBy5 = number % 5 === 0
  const isDivisibleBy15 = isDivisibleBy3 && isDivisibleBy5

  if (isDivisibleBy5) {
    if (isDivisibleBy15) {
      return getResult(35)
    } else {
      return getResult(5)
    }
  } else if (isDivisibleBy3) {
    return getResult(3)
  }
  return number.toString()
}
