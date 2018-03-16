/* Part III - 1. Write a function called reverseString that takes in a string (myStr) as a parameter, and returns a reversed string. Ensure the function will execute when you run it in repl.it. */

function reverseString(myStr) {
  var reverseStr = '';
  for (let i = myStr.length - 1; i >= 0; i--) {
    reverseStr += myStr[i];
  }
  return reverseStr;
}

reverseString('WONDERFUL');
