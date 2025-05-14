const giveMeAJoinerWith =
  c =>
  (...xs) =>
    xs.reduce((s, x) => (!s ? x : s + c + x), '')

export const _FooBar = x =>
  x === 35
    ? giveMeAJoinerWith('-')(_FooBar(3), _FooBar(5))
    : x === 3
    ? 'Fizz'
    : x === 5
    ? 'Buzz'
    : ''
