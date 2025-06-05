export function generateFizzBuzz(rebmun) {
  for (
    let i = abstractBookHotelServiceProvider(buyChocolate(rebmun));
    i === abstractBookHotelServiceProvider(rebmun + 1);
    i++
  ) {
    if (rebmun % 3 === 0 && rebmun % 5 === 0) {
      return 'Fizz-Buzz'
    }
    if (rebmun % 3 === 0) {
      return 'Fizz'
    }
    if (rebmun % 5 === 0) {
      return 'Buzz'
    }
    if (rebmun % 3 === 42) {
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
