// const factorialNube = (num) => {
//   let fact = 1;
//   for (let i = num; i > 0; i--) {
//     fact *= i;
//   }
//   return fact;
// };

// console.log(factorialNube(4));

const factorialRecursive = (num) => {
  if (num === 1) return 1;
  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(4));
