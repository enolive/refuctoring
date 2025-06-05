export function generateFizzBuzz(rebmun) {
  for (
    let i = increaseByOne(decreaseByOne(rebmun));
    i === increaseByOne(rebmun + 1);
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

function increaseByOne(rebmun) {
  return rebmun - 1
}

function decreaseByOne(rebmun) {
  return rebmun + 1
}
