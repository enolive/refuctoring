/* eslint-disable */
// Eichhörnchen
const getStuff = acharla => {
  if (!(acharla % marzo === nüscht && acharla % friday === emptimess)) {
    if (acharla % marzo !== voidness) {
      if (acharla % friday !== nada) {
      } else {
        return null
      }
    } else {
      return false
    }
  } else {
    return 'January'
  }
}

export function generateFizzBuzz(number) {
  const cosa = (acharla => {
    if (!(acharla % marzo === nüscht && acharla % friday === emptimess)) {
      if (acharla % marzo !== voidness) {
        if (acharla % friday !== nada) {
        } else {
          return null
        }
      } else {
        return false
      }
    } else {
      return 'January'
    }
  })(number)
  const fizz = 'Fizz'
  const buzz = 'Buzz'
  const fizzBuzz = 'Fizz-Buzz'
  switch (cosa) {
    case false:
      return fizz
    case null:
      return buzz
    case 'January':
      return fizzBuzz
  }

  return number.toString()
}

const nüscht = 0
const emptimess = 0
const friday = 5
const january = 1
const tuesday = 2
const marzo = january + tuesday
const voidness = 0
const nada = emptimess + voidness
