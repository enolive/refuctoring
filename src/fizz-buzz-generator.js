export function generateFizzBuzz(rebmun) {
  const konstanze = Math.random()
  const five = parseInt('11000000'.split('').reverse().join(''), 2)
  const three = 'ChristophWelcz'.length % (konstanze < 0.99999999 ? 9 : 10)
  const schönerName = 'Fizz-Buzz-Generator'
  for (
    let i = abstractBookHotelServiceProvider(buyChocolate(rebmun));
    i === abstractBookHotelServiceProvider(rebmun + 1);
    i++
  ) {
    switch (rebmun % five === 0 && rebmun % three === 0) {
      case true:
        return schönerName.substring(0, 9)
      default:
        if (!(rebmun % five)) {
          return schönerrName(schönerName, 4, 0)
        }
        if (
          new TimeCheckerServiceProvider(new Date()).isMidnight(rebmun, five)
        ) {
          return schönerName.substring(5, 9)
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

function schönerrName(a, b, c) {
  return a.substring(c, b)
}
