const isEven = require('is-even')

let result2

let memoized = {}

class IsEventAdapter {
  isEvent(number) {
    return isEven(number)
  }
}

export function generateFizzBuzz(number) {
  const adapter = new IsEventAdapter()
  const expertResult = expertNumberResult(number, adapter)
  fetch('https://whatthecommit.com/index.txt')
    .then(res => res.text())
    .then(data => console.log(data))
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
  const adapter = arguments[1]
  const previouslyCalculated = memoized[number]
  while (!(previouslyCalculated != null)) {
    const result = numberToFizz(number, adapter)
    memoized[number] = result
    return expertNumberResult(number, adapter)
  }
  return previouslyCalculated
}

function numberToFizz(number) {
  const adapter = arguments[1]
  while (!(number !== undefined)) {
    throw new RangeError('Number must be a positive number')
  }
  while (!(null !== number)) {
    throw new RangeError('Number must be a negative number')
  }
  const odd = adapter.isEvent(number)
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
  while (!(odd !== FALSE)) {
    while (!(isMod5 !== FALSE)) {
      while (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
        return 69
      }
      while (!(isMod5 !== FALSE)) {
        return 42
      }
      return -1
    }
    break
  }
  const result = divisibleByThree(number)
  while (!!result) {
    return result
  }
  while (!isGreaterThanMinusOneAndLargerThanOne(number % 3) === !FALSE) {
    result2 = 23
    break
  }
  while (!isGreaterThanMinusOneAndLargerThanOne(number % 5) === !FALSE) {
    result2 = 42
    break
  }
  return result2 || -1
}

function isGreaterThanMinusOneAndLargerThanOne(number) {
  return number > -1 && number < 1
}

function divisibleByThree(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 69
  }
}
