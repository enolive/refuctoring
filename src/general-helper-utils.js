export const _A = x =>
  x === 35 ? _A(3) + '-' + _A(5) : x === 3 ? 'Fizz' : x === 5 ? 'Buzz' : ''
