export const _FooBar = x =>
  x === 35
    ? _FooBar(3) + '-' + _FooBar(5)
    : x === 3
    ? 'Fizz'
    : x === 5
    ? 'Buzz'
    : ''
