export class HammingCalculator {
  constructor() {}
  compare(a, b) {
    if (a.length !== b.length) {
      return "invalid strings";
    }
    let result = 0;
    if (a.length > 0 || b.length > 0) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
          result = result;
        } else {
          result++;
        }
      }
    }

    return result;
  }
}
