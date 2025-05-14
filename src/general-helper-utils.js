const giveMeAJoinerWith =
  c =>
  (...xs) =>
    xs.reduce((s, x) => (!s ? x : s + c + x), '')

export const _FiZzBuZz = x =>
  x === 35
    ? giveMeAJoinerWith('-')(_FiZzBuZz(3), _FiZzBuZz(5))
    : x === 3
    ? 'Fizz'
    : x === 5
    ? 'Buzz'
    : ''
