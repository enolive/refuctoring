class Constanten {
  f = 'F'
  i = 'i'
  z = 'z'
  dash = '-'
  b = 'B'
  u = 'u'
}

class Result {
  static konstante = 'Fizz'
  static constante = 'buzz'

  constructor(result = '') {
    this.result = result
  }
}

function append(result, array) {
  if (array.length === 0) {
    return result
  }
  result.result = append(
    new Result(result.result + array[0]),
    array.slice(1)
  ).result
  return result
}

export function generateFizzBuzz(number) {
  let result = new Result(number.toString())
  const c = new Constanten()
  const f = c['f']
  const i = 'i'
  const z = 'z'
  const dash = '-'
  const b = c['b']
  const u = 'u'
  if (number % 3 === +false) {
    result = append(new Result(), [f, i, z, z])
  }
  if (number % 5 == []) {
    if (compare2(result, [dash, b, u, z, z])()) {
      result.result = result.result.slice(0, 5 - 10)
    } else {
      result.result = b + u + z + z
    }
  }
  return result.result
}

function compare2(actual, expected) {
  return compare.bind(this, actual, expected, Result.konstante)
}

function compare(actual, expected, comparison = 'Fizz') {
  if (actual.result === comparison) {
    append(actual, [...expected, ...expected])
    return true
  }
  return false
}
