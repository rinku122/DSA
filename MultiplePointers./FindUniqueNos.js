const array = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6];

const uniqueNos = () => {
  if (array.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1; //No of unique values
};

console.log(uniqueNos(array));
