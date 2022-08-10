function addUpTo(number) {
  return (number * (number + 1)) / 2;
}

const t1 = performance.now();
console.log(addUpTo(10000000000));
const t2 = performance.now();
console.log(`Time elaspsed : ${(t2 - t1) / 1000}`);
