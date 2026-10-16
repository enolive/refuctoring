export function generateFizzBuzz(number) {
  let result = number.toString()
  const f = 'F'
  const i = 'i'
  const z = 'z'
  const dash = '-'
  const b = 'B'
  const u = 'u'
  if (number % 3 === 0) {
    result = f + i + z + z
  }
  if (number % 5 === 0) {
    if (result === 'Fizz') {
      result += dash + b + u + z + z
    } else {
      result = b + u + z + z
    }
  }
  return result
}
