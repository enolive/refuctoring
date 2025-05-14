import { _FiZzBuZz } from './general-helper-utils'

const rr = x =>
  x.length <= 1 ? x : rr('' + x.split('').reduce((a, b) => +a + +b, 0))

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  const str2 = '' + number
  const isDivisibleBy3 = '369'.includes(rr('' + number))
  const isDivisibleBy5 = str2.endsWith('0') || str2.endsWith('5')
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
