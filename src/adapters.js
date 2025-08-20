import isEven from 'is-even'

export class IsEventAdapter {
  isEvent(number) {
    return isEven(number)
  }
}
