export function getResult(mode) {
  if (mode === 35) return getResult(3) + '-' + getResult(5)
  if (mode === 3) return 'Fizz'
  if (mode === 5) return 'Buzz'
}
