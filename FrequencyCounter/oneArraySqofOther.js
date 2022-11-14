//Nube approach
function sameNubeApproach(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.slice(index, 1);
  }
  return true;
}

console.log(sameNubeApproach([1, 2, 3], [1, 4, 9]));

//Good Approach
function sameGoodApproach(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};

  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    //Checks obj1 key**2 exists in obj2 or not if not returns
    if (!(key ** 2 in obj2)) {
      return false;
    }
    // Compares the numbers of values in both objects
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }

  return true;
}

console.log(
  sameGoodApproach([3, 2, 5, 9, 2, 9, 2, 3], [9, 4, 25, 81, 4, 9, 4, 81])
);
