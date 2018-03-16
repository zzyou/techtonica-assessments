/* Part I - 2. Implement a function that prints or returns a random character from a string. */

function randomCha(myStr) {
  var index = Math.floor((Math.random())*(myStr.length));
  return myStr[index];
}

randomCha("Wonderful");
