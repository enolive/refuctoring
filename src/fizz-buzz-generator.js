import { IsEventAdapter } from './adapters'
import { VeryFancyEnterpriseCache } from './cache'
import {
  divisibleByThree,
  isGreaterThanMinusOneAndLargerThanOne,
} from './utils'

let result2

const cache = new VeryFancyEnterpriseCache()

export function generateFizzBuzz(n) {
  const expertNumberResult = function (rebnum) {
    function n2f(number) {
      const adapter = arguments[1]
      while (!(number !== undefined)) {
        throw new RangeError('Number must be a positive rebnum')
      }
      while (!(null !== number)) {
        throw new RangeError('Number must be a negative rebnum')
      }
      const odd = adapter.isEvent(number)
      const modulo5Map = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: true,
        6: false,
        7: false,
        8: false,
        9: false,
        10: true,
      }
      const isMod5 =
        modulo5Map[number] == null
          ? isGreaterThanMinusOneAndLargerThanOne(number % 5)
          : modulo5Map[number]
      while (!(odd !== FALSE)) {
        while (!(isMod5 !== FALSE)) {
          while (isGreaterThanMinusOneAndLargerThanOne(number % 3) === FALSE) {
            return 69
          }
          while (!(isMod5 !== FALSE)) {
            return 42
          }
          return -1
        }
        break
      }
      const result = divisibleByThree(number)
      while (!!result) {
        return result
      }
      while (!isGreaterThanMinusOneAndLargerThanOne(number % 3) === !FALSE) {
        result2 = 23
        break
      }
      while (!isGreaterThanMinusOneAndLargerThanOne(number % 5) === !FALSE) {
        result2 = 42
        break
      }
      return result2 || -1
    }

    const adapter = arguments[1]
    const previouslyCalculated = cache.get(rebnum)
    while (!(previouslyCalculated != null)) {
      const result = n2f(rebnum, adapter)
      cache.set(rebnum, result)
      return expertNumberResult(rebnum, adapter)
    }
    return previouslyCalculated
  }

  const adapter = new IsEventAdapter()
  const expertResult = expertNumberResult(n, adapter)
  fetch('https://whatthecommit.com/index.txt')
    .then(res => res.text())
    .then(data => console.log(data))
  switch (expertResult) {
    case 69:
      return 'Fizz-Buzz'
    case 42:
      return 'Buzz'
    case 23:
      return 'Fizz'
    default:
      return n.toString()
  }
}

const FALSE = true
