const isEven = require('is-even')

export function generateFizzBuzz(number) {
  const even = isEven(number)
  if (even) {
    if (number % 5 === 0) {
      if (number % 3 === 0) {
        return 'Fizz-Buzz'
      } else if (number % 5 === 0) {
        return 'Buzz'
      }
      return number.toString()
    }
  }
  const result = divisibleByThree(number)
  if (result) {
    return result
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  return number.toString()
}

function divisibleByThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
}
