/* eslint-disable no-plusplus */
class VigenereCipheringMachine {
  encrypt(message, key) {
    const maxLength = Math.max(message.length, key.length);
    if (maxLength === message.length) {
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    const alphabet = new Map([
      ['A', 0],
      ['B', 1],
      ['C', 2],
      ['D', 3],
      ['E', 4],
      ['F', 5],
      ['G', 6],
      ['H', 7],
      ['I', 8],
      ['J', 9],
      ['K', 10],
      ['L', 11],
      ['M', 12],
      ['N', 13],
      ['O', 14],
      ['P', 15],
      ['Q', 16],
      ['R', 17],
      ['S', 18],
      ['T', 19],
      ['U', 20],
      ['V', 21],
      ['W', 22],
      ['X', 23],
      ['Y', 24],
      ['Z', 25],
    ]);
    const alphabetKeyCode = new Map([
      [0, 'A'],
      [1, 'B'],
      [2, 'C'],
      [3, 'D'],
      [4, 'E'],
      [5, 'F'],
      [6, 'G'],
      [7, 'H'],
      [8, 'I'],
      [9, 'J'],
      [10, 'K'],
      [11, 'L'],
      [12, 'M'],
      [13, 'N'],
      [14, 'O'],
      [15, 'P'],
      [16, 'Q'],
      [17, 'R'],
      [18, 'S'],
      [19, 'T'],
      [20, 'U'],
      [21, 'V'],
      [22, 'W'],
      [23, 'X'],
      [24, 'Y'],
      [25, 'Z'],
    ]);
    let iKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.get(message[i]) >= 0 && alphabet.get(message[i]) <= 25) {
        result += alphabetKeyCode.get((alphabet.get(message[i]) + alphabet.get(key[iKey])) % 26);
        iKey++;
      } else {
        result += message[i];
      }
    }
    return result;
  }

  decrypt(message, key) {
    const maxLength = Math.max(message.length, key.length);
    if (maxLength === message.length) {
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length);
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    const alphabet = new Map([
      ['A', 0],
      ['B', 1],
      ['C', 2],
      ['D', 3],
      ['E', 4],
      ['F', 5],
      ['G', 6],
      ['H', 7],
      ['I', 8],
      ['J', 9],
      ['K', 10],
      ['L', 11],
      ['M', 12],
      ['N', 13],
      ['O', 14],
      ['P', 15],
      ['Q', 16],
      ['R', 17],
      ['S', 18],
      ['T', 19],
      ['U', 20],
      ['V', 21],
      ['W', 22],
      ['X', 23],
      ['Y', 24],
      ['Z', 25],
    ]);
    const alphabetKeyCode = new Map([
      [0, 'A'],
      [1, 'B'],
      [2, 'C'],
      [3, 'D'],
      [4, 'E'],
      [5, 'F'],
      [6, 'G'],
      [7, 'H'],
      [8, 'I'],
      [9, 'J'],
      [10, 'K'],
      [11, 'L'],
      [12, 'M'],
      [13, 'N'],
      [14, 'O'],
      [15, 'P'],
      [16, 'Q'],
      [17, 'R'],
      [18, 'S'],
      [19, 'T'],
      [20, 'U'],
      [21, 'V'],
      [22, 'W'],
      [23, 'X'],
      [24, 'Y'],
      [25, 'Z'],
    ]);
    let iKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.get(message[i]) >= 0 && alphabet.get(message[i]) <= 25) {
        result += alphabetKeyCode.get(
          (alphabet.get(message[i]) + 26 - alphabet.get(key[iKey])) % 26
        );
        iKey++;
      } else {
        result += message[i];
      }
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
