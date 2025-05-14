export function getResult(x) {
  if (x === 35) return getResult(3) + '-' + getResult(5)
  if (x === 3) return 'Fizz'
  if (x === 5) return 'Buzz'
}
