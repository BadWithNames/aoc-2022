const fs = require('fs');

const slice = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    const subarray = arr.slice(i, i + size);
    res.push(subarray);
  }
  return res;
};

const convertChar = (char) => {
  if (char.toLowerCase() === char) {
    return char.charCodeAt(0) - 96;
  } else {
    return char.toLowerCase().charCodeAt(0) - 96 + 26;
  }
};

const partOne = () => {
  const arr = fs.readFileSync('./input.txt', 'utf-8').split('\n');
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const seen = new Map();
    for (let j = 0; j < arr[i].length / 2; j += 1) {
      seen.set(arr[i][j], 1);
    }
    for (let k = arr[i].length / 2; k < arr[i].length; k += 1) {
      if (seen.has(arr[i][k])) {
        sum += convertChar(arr[i][k]);
        break;
      }
    }
  }
  return sum;
};

const partTwo = () => {
  const input = fs.readFileSync('./input.txt', 'utf-8').split('\n');
  const arr = slice(input, 3);
  let totalSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i][0].length; j += 1) {
      if (
        arr[i][1].includes(arr[i][0][j]) &&
        arr[i][2].includes(arr[i][0][j])
      ) {
        totalSum += convertChar(arr[i][0][j]);
        break;
      }
    }
  }
  return totalSum;
};
