const array = [-4, -3, -2, -1, 0, 1, 2, 5];
// console.log(array.length, "length");

// const sumZeroNaive = () => {
//   for (let i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// };

// console.log(sumZeroNaive());

const sumZeroGood = () => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    console.log(sum);
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroGood());
