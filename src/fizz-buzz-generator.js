import { _FiZzBuZz } from './general-helper-utils'

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  let str = '' + number
  let str2 = '' + number
  do {
    const strs = str.split('')
    const sum = strs.reduce((a, b) => +a + +b, 0)
    str = '' + sum
  } while (str.length > 1)
  const isDivisibleBy3 = '369'.includes(str)
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
