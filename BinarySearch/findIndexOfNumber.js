// const array = [
//   1, 3, 5, 6, 8, 9, 10, 11, 15, 17, 20, 52, 54, 60, 75, 80, 84, 88, 90, 96, 100,
// ];

const array = [1, 3, 5, 6, 8, 9, 10];
//s-1,m-6,e-10

const findIndexOfNumber = (num) => {
  let start = 0;
  let end = array.length - 1;

  let middle = Math.floor((start + end) / 2);
  while (middle !== num && start <= end) {
    if (array[middle] > num) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (num === array[middle]) {
    return middle;
  }

  return -1;
};

console.log(findIndexOfNumber(10));
