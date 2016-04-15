// Write a function called sumAndMultiply() that takes in THREE numbers as arguments and then returns two values in an array: the sum of those numbers and the product of those numbers. Use your existing sum() and product() functions to do these calculations, and be sure to turn off their console.log()s by commenting them out. Have this function do a console.log() of the numbers, the sum, and the product with two separate messages that exactly follows the examples below and uses the values that were input into the function:
//
// "4 and 7 and 5 sum to 16."
//
// "The numbers 4 and 7 and 5 have a product of 140."

function sum (x,y) {
  //console.log('"The sum of ' + x + ' and ' + y + ' is ' + (x + y) + '"');
  return x + y;
}

function multiply(x,y) {
  //console.log('"The product of ' + x + ' and ' + y + ' is ' + (x * y) + '"');
  return x * y;
}

function sumAndMultiply(x,y,z) {
  var sumProductArray = [];
  sumProductArray.push(sum(x,y) + z);
  sumProductArray.push(multiply(x,y) * z);
  console.log('"' + x + ' and ' + y + ' and ' + z + ' sum to ' + sumProductArray[0] + '"');
  console.log('"The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + sumProductArray[1] + '"');
}
