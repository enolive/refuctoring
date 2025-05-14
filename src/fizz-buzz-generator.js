function getResult(mode) {
  if (mode === 35) return 'Fizz-Buzz'
  if (mode === 3) return 'Fizz'
  if (mode === 5) return 'Buzz'
}

export function generateFizzBuzz(number) {
  // check if the number mod 3 and 5 is 0
  if (number % 3 === 0 && number % 5 === 0) {
    return getResult(35)
  }
  if (number % 3 === 0) {
    return getResult(3)
  }
  if (number % 5 === 0) {
    return getResult(5)
  }
  return number.toString()
}
