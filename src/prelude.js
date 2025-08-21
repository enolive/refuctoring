// findFirst :: (a -> Bool) -> [a] -> a
export const findFirst = p => compose(head)(filter(p))
// const_ :: a -> b -> a
export const const_ = x => _ => x
// mod :: Integral a => a -> a -> a
const mod = d => n => n % d
// isDivisibleBy :: Integral a => a -> a -> Bool
export const isDivisibleBy = d => n => mod(d)(n) === 0
// and :: (a -> Bool) -> (a -> Bool) -> a -> Bool
export const and = f => g => x => f(x) && g(x)
// otherwise :: Bool
export const otherwise = true
// show :: Show a => a -> String
export const show = x => x.toString()
// fst :: (a, b) -> a
export const fst = p => p[0]
// snd :: (a, b) -> b
export const snd = p => p[1]
// flip :: (a -> b -> c) -> b -> a -> c
export const flip = f => x => y => f(y)(x)
// filter :: (a -> Bool) -> [a] -> [a]
const filter = p => xs => xs.filter(p)
// head :: [a] -> a
const head = xs => xs[0]
// compose :: (b -> c) -> (a -> b) -> a -> c
const compose = f => g => x => f(g(x))
