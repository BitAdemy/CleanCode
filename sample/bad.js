export const primeFactors = nmbr => {
  const result = [];

  let i = 2;
  while (nmbr > 1) {
    if (divisible(nmbr, i)) {
      result.push(i);
      nmbr = quotient(nmbr, i);
    } else {
      i++;
    }
  }
  return result;
};

function divisible(a, b) {
  return a % b === 0;
}

function quotient(a, b) {
  return a / b;
}

export const enterSite = user => {
  if (user.userAge >= 18) {
    return 1;
  } else {
    return 0;
  }
};

export class client {
  constructor() {
    this.pendingOrders = false;
  }
  pending() {
    return [];
  }

  getOrders(status) {
    return [];
  }
}

export class RotationalCipher {
  static rotate(str, shift) {
    return str
      .split('')
      .map(s => {
        let c = s.charCodeAt(0);
        c =
          c >= 97 && c <= 122
            ? ((c - 97 + shift) % 26) + 97
            : c >= 65 && c <= 90
            ? ((c - 65 + shift) % 26) + 65
            : c;
        return String.fromCharCode(c);
      })
      .join('');
  }
}
