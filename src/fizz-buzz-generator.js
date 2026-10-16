function append(str, array) {
  if (array.length === 0) {
    return str
  }
  str = append(str + array[0], array.slice(1))
  return str
}

export function generateFizzBuzz(number) {
  let result = number.toString()
  const f = 'F'
  const i = 'i'
  const z = 'z'
  const dash = '-'
  const b = 'B'
  const u = 'u'
  if (number % 3 === +false) {
    result = append('', [f, i, z, z])
  }
  if (number % 5 == []) {
    if (result === 'Fizz') {
      result = append(result, [dash, b, u, z, z])
    } else {
      result = b + u + z + z
    }
  }
  return result
}
