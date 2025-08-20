export class VeryFancyEnterpriseCache {
  memoized = {}

  get(key) {
    return this.memoized[key]
  }

  set(key, value) {
    this.memoized[key] = value
  }
}
