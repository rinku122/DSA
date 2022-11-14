const array = [60, 26, 25, 5, 20, 12, 67, 45];

const bubbleSortNube = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSortNube(array));

const array1 = [60, 26, 25, 5, 20, 12, 67, 45, -2, 1, 10, 2, 67, 0.3, 20];

const bubbleSortBest = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSortBest(array1));

const array2 = [8, 1, 2, 3, 4, 5, 6, 7];

const bubbleSortBetter = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    let noswap = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noswap = false;
      }
    }
    if (noswap) break;
  }
  return arr;
};

console.log(bubbleSortBetter(array2));
