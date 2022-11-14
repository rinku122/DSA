const countCharInStr = (string) => {
  let obj = {};

  for (let char of string) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = (obj[char] || 0) + 1;
    }
  }

  console.log(obj);
};

countCharInStr("Hi Hello Estimate !");
