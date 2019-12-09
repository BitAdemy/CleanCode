export const getPrimeFactors = number => {
  const primeFactors = [];
  const INITIAL_PRIME = 2;
  let factor = INITIAL_PRIME;
  let dividend = number;
  while (dividend >= INITIAL_PRIME) {
    if (isDivisible(dividend, factor)) {
      primeFactors.push(factor);
      dividend = getQuotient(dividend, factor);
    } else {
      factor++;
    }
  }
  return primeFactors;
};

function isDivisible(number, factor) {
  return number % factor === 0;
}

function getQuotient(number, factor) {
  return number / factor;
}

export const canEnterSite = user => {
  const MINIMUM_AGE = 18;
  if (user.age >= MINIMUM_AGE) {
    return true;
  } else {
    return false;
  }
};

export class Client {
  constructor() {
    this.hasPendingOrders = false;
  }

  getPendingOrders() {
    return [];
  }
  getOrdersByStatus(orderStatus) {
    return [];
  }
}

export class RotationalCipher {
  static rotate(clearText, rotation) {
    const minimumLowerCode = 'a'.charCodeAt(0);
    const minimumCapitalCode = 'A'.charCodeAt(0);
    const cipherLenght = 26;

    return clearText
      .split('')
      .map(character => {
        let characterCode;
        let deltaCode;
        let cipherCode;
        if (this.isLowerCase(character)) {
          characterCode = character.charCodeAt(0) - minimumLowerCode;
          deltaCode = (characterCode + rotation) % cipherLenght;
          cipherCode = deltaCode + minimumLowerCode;
          return String.fromCharCode(cipherCode);
        } else if (this.isUpperCase(character)) {
          characterCode = character.charCodeAt(0) - minimumCapitalCode;
          deltaCode = (characterCode + rotation) % cipherLenght;
          cipherCode = deltaCode + minimumCapitalCode;
          return String.fromCharCode(cipherCode);
        } else {
          return character;
        }
      })
      .join('');
  }
  isLowerCase(character) {
    return /[a-z]/.test(character);
  }
  isUpperCase(character) {
    return /[A-Z]/.test(character);
  }
}
