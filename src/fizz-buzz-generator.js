export function generateFizzBuzz(number) {
  let result = number.toString()
  if (number % 3 === 0) {
    result = 'Fizz'
  }
  if (number % 5 === 0) {
    result = 'Buzz'
    if (number % 3 === 0) {
      result = 'Fizz-Buzz'
    }
  }
  return result
}
