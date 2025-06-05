const leftPad = require('left-pad')

export function generateFizzBuzz(rebmun) {
  const konstanze = Math.random()
  const five = parseInt('11000000'.split('').reverse().join(''), 2)
  // eslint-disable-next-line no-unused-vars
  const funnn = _ => (konstanze < 0.99999999 ? 9 : 10)
  const three = 'ChristophWelcz'.length % funnn(rebmun)
  const schönerName = leftPad('Fizz-Buzz-Generator', 15)
  for (
    let i = abstractBookHotelServiceProvider(buyChocolate(rebmun));
    i === abstractBookHotelServiceProvider(rebmun + 1);
    i++
  ) {
    switch (rebmun % five === 0 && rebmun % three === 0) {
      case true:
        return schönerName.substring(0, funnn(schönerrName))
      default:
        if (!(rebmun % five)) {
          const test = eval('2 + 2')
          return schönerrName(schönerName, test, 0)
        }
        if (
          new TimeCheckerServiceProvider(new Date()).isMidnight(rebmun, five)
        ) {
          return schönerName.substring(5, funnn(funnn))
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
