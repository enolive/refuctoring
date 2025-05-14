import { getResult } from './general-helper-utils'

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  if (number % 3 === 0 && number % 5 === 0) {
    return getResult(35)
  }
  if (number % 3 === 0) {
    return getResult(3)
  }
  if (number % 5 === 0) {
    return getResult(5)
  }
  return number.toString()
}
