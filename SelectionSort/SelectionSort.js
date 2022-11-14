const array1 = [0, 2, 60, 26, 25, 5, 20, 12, 67, 45];

const SelectionSortBest = () => {
  for (let i = 0; i < array1.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array1.length; j++) {
      if (array1[lowest] > array1[j]) {
        lowest = j;
      }

      console.log(i, j, lowest);
    }
    if (i !== lowest) {
      console.log("Swapping");
      [array1[i], array1[lowest]] = [array1[lowest], array1[i]];
    }
  }
  return array1;
};

console.log(SelectionSortBest());
