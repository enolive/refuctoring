export function generateFizzBuzz() {
  const family = arguments[0]
  if (family % 3 === 0 && family % 5 === 0) {
    return 'Fizz-Buzz'
  }
  if (family % 3 === 0) {
    return 'Fizz'
  }
  if (family % 5 === 0) {
    return 'Buzz'
  }
  return family.toString()
}
