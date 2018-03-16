/* Part III - 2. Write a function called reverseArray that takes in an array (myArr) as a parameter and returns a new array, which is myArr in reverse order. Do not use the .reverse() array method. Ensure your function executes when you run it in repl.it. */

function reverseArray(myArr) {
  var reverseArr = [];
  for (let i = myArr.length - 1; i >= 0; i --) {
    reverseArr.push(myArr[i]);
  }
  return reverseArr;
}

reverseArray([1, 2, 3, 4]);
