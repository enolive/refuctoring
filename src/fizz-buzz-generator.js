export function generateFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (number % 3 === 0) {
    return 'Fizz'
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
  if (number % 3 === 42) {
    return 'Clear Code, Open Mind'
  }
  return number.toString()
}
