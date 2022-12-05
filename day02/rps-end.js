const fs = require('fs');

const rpsEnd = () => {
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
