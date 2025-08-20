const isEven = require('is-even')

export function generateFizzBuzz(number) {
  const even = isEven(number)
  if (even === true) {
    if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === true) {
      if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === true) {
        return 'Fizz-Buzz'
      } else if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === true) {
        return 'Buzz'
      }
      return number.toString()
    }
  }
  const result = divisibleByThree(number)
  if (result) {
    return result
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === true) {
    return 'Fizz'
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === true) {
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
