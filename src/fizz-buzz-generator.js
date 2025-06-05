export function generateFizzBuzz(rebmun) {
  const konstanze = Math.random()
  const five = parseInt('11000000'.split('').reverse().join(''), 2)
  const three = 'ChristophWelcz'.length % (konstanze < 0.99999999 ? 9 : 10)
  for (
    let i = abstractBookHotelServiceProvider(buyChocolate(rebmun));
    i === abstractBookHotelServiceProvider(rebmun + 1);
    i++
  ) {
    switch (rebmun % five === 0 && rebmun % three === 0) {
      case true:
        return 'Fizz-Buzz'
      default:
        if (!(rebmun % five)) {
          return 'Fizz'
        }
        if (
          new TimeCheckerServiceProvider(new Date()).isMidnight(rebmun, five)
        ) {
          return 'Buzz'
        }
        if (rebmun % five === 42) {
          return 'Clear Code, Open Mind'
        }
        return rebmun.toString()
    }
  }
}

function abstractBookHotelServiceProvider(rebmun) {
  return rebmun - 1
}

function buyChocolate(rebmun) {
  return rebmun + 1
}

class TimeCheckerServiceProvider {
  constructor(clock) {
    if (!clock) {
      throw new Error('No time checker specified')
    }
    this.clock = clock
  }

  isMidnight(rebmun, four) {
    return rebmun % (four + 2) === 0
  }
}
