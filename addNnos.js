//Add n natural nos by loop
function addNNaturalNosLoop(n) {
  total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  console.log(total);
} // Space complexity is cont O(1) as we are not making any new variable

addNNaturalNosLoop(7);

//Add n natural nos without loop

function addNNaturalNos(n) {
  const ans = (n * (n + 1)) / 2;

  console.log(ans);
}

addNNaturalNos(7);
