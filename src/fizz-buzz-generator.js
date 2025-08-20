const isEven = require('is-even')

export function generateFizzBuzz(number) {
  const even = isEven(number)
  if (even) {
    if (isZero(number % 5)) {
      if (isZero(number % 3)) {
        return 'Fizz-Buzz'
      } else if (isZero(number % 5)) {
        return 'Buzz'
      }
      return number.toString()
    }
  }
  const result = divisibleByThree(number)
  if (result) {
    return result
  }
  if (isZero(number % 3)) {
    return 'Fizz'
  }
  if (isZero(number % 5)) {
    return 'Buzz'
  }
  return number.toString()
}

function isZero(number) {
  if (number > -1 && number < 1) {
    return true
  }
  return false
}

function divisibleByThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
}
