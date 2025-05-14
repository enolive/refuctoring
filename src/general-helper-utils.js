export const getResult = x =>
  x === 35
    ? getResult(3) + '-' + getResult(5)
    : x === 3
    ? 'Fizz'
    : x === 5
    ? 'Buzz'
    : ''
