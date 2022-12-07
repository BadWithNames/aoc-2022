const fs = require('fs');

const partOne = () => {
  let score = 0;
  const values = {
    A: 1, // rock
    X: 1,
    B: 2, // paper
    Y: 2,
    C: 3, // scissor
    Z: 3,
  };

  const arr = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((val) => [val[0], val[2]]);

  arr.forEach((game) => {
    const opponentMove = values[game[0]];
    const playerMove = values[game[1]];

    if (opponentMove === playerMove) {
      score += playerMove + 3;
    } else if (
      (playerMove === 1 && opponentMove !== 2) ||
      (playerMove === 2 && opponentMove !== 3) ||
      (playerMove === 3 && opponentMove !== 1)
    ) {
      score += playerMove + 6;
    } else {
      score += playerMove;
    }
  });

  return score;
};

const partTwo = () => {
  let score = 0;
  const values = {
    A: 1, // rock
    B: 2, // paper
    C: 3, // scissor
  };

  const arr = fs
    .readFileSync('./input.txt', 'utf-8')
    .split('\n')
    .map((val) => [val[0], val[2]]);

  arr.forEach((game) => {
    const opponentMove = values[game[0]];
    const end = game[1];

    if (end === 'Y') {
      score += 3 + opponentMove;
    } else if (end === 'X') {
      switch (opponentMove) {
        case 1:
          score += 3;
          break;
        case 2:
          score += 1;
          break;
        case 3:
          score += 2;
          break;
        default:
          break;
      }
    } else {
      switch (opponentMove) {
        case 1:
          score += 6 + 2;
          break;
        case 2:
          score += 6 + 3;
          break;
        case 3:
          score += 6 + 1;
          break;
        default:
          break;
      }
    }
  });

  return score;
};
