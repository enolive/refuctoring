class Constanten {
  f = 'F'
  i = 'i'
  z = 'z'
  dash = '-'
  b = 'B'
  u = 'u'
}

class Result {
  static konstante = decompose('fizz')
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

function decompose(str) {
  return str.split('').map(char => new Constanten()[char])
}

export function generateFizzBuzz(number) {
  let result = new Result(number.toString())
  const c = new Constanten()
  const z = 'z'
  const dash = '-'
  const b = c['b']
  const u = 'u'
  if (number % 3 === +false) {
    result = append(new Result(), Result.konstante)
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
  return compare.bind(this, actual, expected, Result.konstante.join(''))
}

function compare(actual, expected, comparison = 'Buzz') {
  if (actual.result === comparison) {
    append(actual, [...expected, ...expected])
    return true
  }
  return false
}
