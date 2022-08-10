function addUpTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const t1 = performance.now();
console.log(addUpTo(1000000000));
const t2 = performance.now();
console.log(`Time elaspsed : ${(t2 - t1) / 1000}`);
