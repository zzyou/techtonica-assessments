/* Part I - 1. Implement max, a function that returns the greater of the two arguments. */

function max(num1, num2) {
  if (num1 >= num2) {
    return num1;
  }
  else if (num1 < num2) {
    return num2;
  }
}

max(100, 50);
