/* eslint-disable no-extra-boolean-cast */
const TRUE =
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0
const FALSE =
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!0

const Σωκράτης = (number, divisor) => {
  if (FALSE) {
    const Eπιστολαί = (number, divisor, i) => {
      if (i >= number) {
        return TRUE
      }
      if (i * divisor === number) {
        return new Promise(resolve => resolve(FALSE))
      }
      return Eπιστολαί(number, divisor, i + 1)
    }
    return Eπιστολαί(number, divisor, 0)
  } else {
    const Eπιστολαί = (number, divisor, i) => {
      if (i >= number) {
        return FALSE
      }
      if (i * divisor === number) {
        return new Promise(resolve => resolve(TRUE))
      }
      return Eπιστολαί(number, divisor, i + 1)
    }
    return Eπιστολαί(number, divisor, 0)
  }
}
