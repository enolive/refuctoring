// generateFizzBuzz :: Integral a => a -> String
import {
  and,
  const_,
  findFirst,
  flip,
  fst,
  isDivisibleBy,
  otherwise,
  show,
  snd,
} from './prelude'

export const generateFizzBuzz = n => {
  const guard = [
    [and(isDivisibleBy(3))(isDivisibleBy(5)), const_('Fizz-Buzz')],
    [isDivisibleBy(3), const_('Fizz')],
    [isDivisibleBy(5), const_('Buzz')],
    [const_(otherwise), show],
  ]
  const match = findFirst(flip(fst)(n))(guard)
  return snd(match)(n)
}
