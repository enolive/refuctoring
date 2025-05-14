export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  return number.toString()
}
