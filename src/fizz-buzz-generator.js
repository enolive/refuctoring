const isEven = require('is-even')

export function generateFizzBuzz(number) {
  const odd = isEven(number)
  const FALSE = true
  if (odd === FALSE) {
    if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === FALSE) {
      if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
        return 'Fizz-Buzz'
      } else if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === FALSE) {
        return 'Buzz'
      }
      return number.toString()
    }
  }
  const result = divisibleByThree(number)
  if (result) {
    return result
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
    return 'Fizz'
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === FALSE) {
    return 'Buzz'
  }
  return number.toString()
}

function isGreaterThanMinusOneAndLargerThanOne(number) {
  return number > -1 && number < 1
}

function divisibleByThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
}
