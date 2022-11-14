//Nube Approach
const isAnagramNube = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagramNube("straraam", "armarast"));

//Good Approach
const isAnagramGood = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj = {};

  for (let val of str1) {
    obj[val] = (obj[val] || 0) + 1;
  }
  console.log(obj);

  for (let letter of str2) {
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }

  return true;
};

console.log(isAnagramGood("strarauam", "uarmarast"));
