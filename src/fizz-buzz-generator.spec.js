import { fc, test } from '@fast-check/vitest'
import { describe, expect, it } from 'vitest'
import { generateFizzBuzz } from './fizz-buzz-generator'

describe('Fizz-Buzz Generator', () => {
  describe('examples', () => {
    describe('normal numbers are replicated', () => {
      it.each([1, 2, 4])(`should replicate %n.`, number =>
        expect(generateFizzBuzz(number)).toEqual(number.toString())
      )
    })

    describe('numbers divisible by 3 generate Fizz', () => {
      it.each([3, 6, 9])(`number %n is converted to Fizz`, number => {
        expect(generateFizzBuzz(number)).toEqual('Fizz')
      })
    })

    describe('numbers divisible by 5 generate Buzz', () => {
      it.each([5, 10, 20])(`number %n is converted to Buzz`, number => {
        expect(generateFizzBuzz(number)).toEqual('Buzz')
      })
    })

    describe('numbers divisible by both 3 and 5 generate Fizz-Buzz', () => {
      it.each([15, 30, 45])(`number %n is converted to Fizz-Buzz`, number => {
        expect(generateFizzBuzz(number)).toEqual('Fizz-Buzz')
      })
    })
  })

  describe('properties', () => {
    fc.configureGlobal({ includeErrorInReport: true })
    // we are doing some addition stuff here. the numbers might overflow producing weird problems
    // fix it by limiting our max number!
    const maxNumber = 1_000_000
    const numbers = fc.nat({ max: maxNumber })

    test.prop([numbers])('all numbers generate a non-empty result', number => {
      expect(generateFizzBuzz(number)).not.toEqual('')
    })

    test.prop([numbers.filter(x => x % 5 === 0)], { verbose: true })(
      'numbers divisible by 5 always result into buzz',
      number => {
        expect(generateFizzBuzz(number)).toContain('Buzz')
      }
    )

    test.prop([numbers])(
      'every sequence of 3 numbers contains a Fizz',
      number => {
        const sequence = range(number, number + 2).map(generateFizzBuzz)

        expect(sequence).toEqual(
          expect.arrayContaining([expect.stringContaining('Fizz')])
        )
      }
    )

    test.prop([numbers])(
      'every sequence of 5 numbers contains a Buzz',
      number => {
        const sequence = range(number, number + 4).map(generateFizzBuzz)

        expect(sequence).toEqual(
          expect.arrayContaining([expect.stringContaining('Buzz')])
        )
      }
    )

    test.prop([numbers])(
      'any input that is not replicated repeats its result after 15 numbers',
      number => {
        const result = generateFizzBuzz(number)
        // if the result is a number, it will not be a repeat. For instance, 1 and 16 generate different results
        const isNotReplicationCase = isNaN(Number(result))
        fc.pre(isNotReplicationCase)
        const resultAfter15 = generateFizzBuzz(number + 15)

        expect(resultAfter15).toEqual(result)
      }
    )
  })
})

function range(start, end) {
  return [...Array(end - start + 1).keys()].map(i => i + end)
}
