const fs = require('fs');

// TODO: optimize :)

const topThreeCalories = () => {
  const arr = fs.readFileSync('./input.txt', 'utf-8').split('\n');
  // each empty string = new elf
  // store in arr, sort, return top 3
  let values = [];
  let pointer = 0;
  let currentVal = 0;
  while (pointer < arr.length) {
    if (arr[pointer] === '') {
      values.push(currentVal);
      currentVal = 0;
    } else {
      currentVal += Number.parseInt(arr[pointer]);
    }

    pointer += 1;
  }

  values.sort((a, b) => b - a);
  return values[0] + values[1] + values[2];
};
