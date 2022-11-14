const array = [1, 30, 4, 5, 3, 3, 4, 4, 5, 6];

const maxSumSubArrayNaive = (num) => {
  let max = -Infinity;
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

console.log(maxSumSubArrayNaive(3));

const maxSumSubArrayGood = (num) => {
  if (array.length < num) return null;
  let temp = 0;
  let max = 0;
  for (let i = 0; i < num; i++) {
    max += array[i];
  }
  temp = max;
  for (let i = num; i < array.length; i++) {
    temp = temp - array[i - num] + array[i];
    max = Math.max(temp, max);
  }
  return max;
};

console.log(maxSumSubArrayGood(3));
