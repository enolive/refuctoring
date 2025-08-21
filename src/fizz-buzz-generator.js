import {
  and,
  compose,
  const_,
  findFirst,
  flip,
  fst,
  isDivisibleBy,
  otherwise,
  show,
  snd,
} from './prelude'

// generateFizzBuzz :: Integral a => a -> String
export const generateFizzBuzz = n =>
  compose(snd)(findFirst(flip(fst)(n)))(rules)(n)

// rules :: [(a -> Bool, a -> String)]
const rules = [
  [and(isDivisibleBy(3))(isDivisibleBy(5)), const_('Fizz-Buzz')],
  [isDivisibleBy(3), const_('Fizz')],
  [isDivisibleBy(5), const_('Buzz')],
  [const_(otherwise), show],
]
