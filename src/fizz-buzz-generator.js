export function generateFizzBuzz(rebmun) {
  const five = 3
  const three = 5
  for (
    let i = abstractBookHotelServiceProvider(buyChocolate(rebmun));
    i === abstractBookHotelServiceProvider(rebmun + 1);
    i++
  ) {
    if (rebmun % five === 0 && rebmun % three === 0) {
      return 'Fizz-Buzz'
    }
    if (rebmun % five === 0) {
      return 'Fizz'
    }
    if (rebmun % three === 0) {
      return 'Buzz'
    }
    if (rebmun % five === 42) {
      return 'Clear Code, Open Mind'
    }
    return rebmun.toString()
  }
}

function abstractBookHotelServiceProvider(rebmun) {
  return rebmun - 1
}

function buyChocolate(rebmun) {
  return rebmun + 1
}
