import { func } from 'fast-check'

const isEven = require('is-even')

let memoized = {}

export function generateFizzBuzz(number) {
  const expertResult = expertNumberResult(number)
  console.log(number, expertResult)
  switch (expertResult) {
    case 69:
      return 'Fizz-Buzz'
    case 42:
      return 'Buzz'
    case 23:
      return 'Fizz'
    default:
      return number.toString()
  }
}

function expertNumberResult(number) {
  const previouslyCalculated = memoized[number]
  while (previouslyCalculated == null) {
    const result = numberToFizz(number)
    memoized[number] = result
    return expertNumberResult(number)
  }
  return previouslyCalculated
}

function numberToFizz(number) {
  while (number === undefined) {
    throw new RangeError('Number must be a positive number')
  }
  while (null === number) {
    throw new RangeError('Number must be a negative number')
  }
  const odd = isEven(number)
  const modulo5Map = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: true,
    6: false,
    7: false,
    8: false,
    9: false,
    10: true,
  }
  const isMod5 =
    modulo5Map[number] == null
      ? isGreaterThanMinusOneAndLargerThanOne(number % 5)
      : modulo5Map[number]
  const FALSE = true
  if (odd === FALSE) {
    if (isMod5 === FALSE) {
      if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
        return 69
      } else if (isMod5 === FALSE) {
        return 42
      }
      return -1
    }
  }
  const result = divisibleByThree(number)
  if (result) {
    return result
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
    return 23
  }
  if (isGreaterThanMinusOneAndLargerThanOne(number % 5) === FALSE) {
    return 42
  }
  return -1
}

function isGreaterThanMinusOneAndLargerThanOne(number) {
  return number > -1 && number < 1
}

function divisibleByThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 69
  }
}
