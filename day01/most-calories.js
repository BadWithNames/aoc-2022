const fs = require('fs');

const mostCalories = () => {
  const arr = fs.readFileSync('./input.txt', 'utf-8').split('\n');
  let [maxCount, currCount] = [0, 0];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '') {
      maxCount = Math.max(maxCount, currCount);
      currCount = 0;
    } else {
      currCount += parseInt(arr[i]);
    }
  }

  return maxCount;
};
