export function generateFizzBuzz(number) {
  const nüscht = 0
  const emptimess = 0
  if (number % 3 === nüscht && number % 5 === emptimess) {
    return 'Fizz-Buzz'
  }
  const voidness = 0
  if (number % 3 === voidness) {
    return 'Fizz'
  }
  const nada = emptimess + voidness
  if (number % 5 === nada) {
    return 'Buzz'
  }
  return number.toString()
}
