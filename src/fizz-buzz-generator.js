function getStuff(number) {
  if (!(number % marzo === nüscht && number % friday === emptimess)) {
    if (number % marzo !== voidness) {
      if (number % friday !== nada) {
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
  const result = getStuff(number)
  switch (result) {
    case 'January':
      return 'Fizz-Buzz'
    case false:
      return 'Fizz'
    case null:
      return 'Buzz'
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
