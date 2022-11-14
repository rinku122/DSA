//Incrementing loop Reversing a string
function reverseStringIncrement(str) {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr += str[str.length - 1 - i];
  }
  console.log(newStr);
}

reverseStringIncrement("rajesh");

//Incrementing loop Reversing a array
function reverseArrayIncrementing(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = arr[arr.length - 1 - i];
  }

  console.log(newarr);
}

reverseArrayIncrementing([1, 2, 3, 4, 5]);

//Decrementing loop reversing a string
function reverseArrayDecrementing(arr) {
  let newArr = [];

  for (i = arr.length - 1; i >= 0; i--) {
    newArr[i] = arr[arr.length - i - 1];
  }

  console.log(newArr);
}

reverseArrayDecrementing([1, 2, 3, 4, 5]);

//Decrementing loop reversing an Array
function reverseStringDecrement(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}

reverseStringDecrement("rajesh");
