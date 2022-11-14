// const collectoddNumbersGood = (arr) => {
//   let oddArray = [];

//   function helperRecursion(arrIN) {
//     if (arrIN.length === 0) return;

//     if (arrIN[0] % 2 !== 0) {
//       oddArray.push(arrIN[0]);
//     }

//     helperRecursion(arrIN.slice(1));
//   }
//   helperRecursion(arr);
//   return oddArray;
// };

// console.log(collectoddNumbersGood([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));

const collectoddNumbersNaive = (arr) => {
  let oddArray = [];

  if (arr.length === 0) return oddArray;

  if (arr[0] % 2 !== 0) {
    oddArray.push(arr[0]);
  }

  oddArray = oddArray.concat(collectoddNumbersNaive(arr.splice(1)));

  return oddArray;
};

console.log(collectoddNumbersNaive([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));
