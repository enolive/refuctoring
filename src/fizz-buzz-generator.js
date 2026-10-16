export function generateFizzBuzz(number) {
  let result = number.toString()
  if (number % 3 === 0) {
    result = 'Fizz'
  }
  if (number % 5 === 0) {
    if (result === 'Fizz') {
      result += '-Buzz'
    } else {
      result = 'Buzz'
    }
  }
  return result
}
