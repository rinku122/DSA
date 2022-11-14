const countZero = (num) => {
  if (num < 1) {
    console.log("All done");
    return 1;
  }
  console.log(num);
  num--;
  countZero(num);
};

countZero(10);



