class Result {
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
  const f = 'F'
  const i = 'i'
  const z = 'z'
  const dash = '-'
  const b = 'B'
  const u = 'u'
  if (number % 3 === +false) {
    result = append(new Result(), [f, i, z, z])
  }
  if (number % 5 == []) {
    if (compare(result, [dash, b, u, z, z])) {
      result.result = result.result.slice(0, 5 - 10)
    } else {
      result.result = b + u + z + z
    }
  }
  return result.result
}

function compare(actual, expected, comparison = 'Fizz') {
  if (actual.result === comparison) {
    append(actual, [...expected, ...expected])
    return true
  }
  return false
}
