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

function sumArray(someArray) {
  var sum = 0;
  for (var i = 0; i < someArray.length; i++) {
    sum += someArray[i];
  };
  console.table(someArray);
  console.log('"' + someArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum"');
}

function productArray(someArray) {
  var product = 1;
  for (var i = 0; i < someArray.length; i++) {
    product = product * (someArray[i]);
  }
  console.table(someArray);
  console.log('"' + 'The numbers ' + someArray + ' have a product of ' + product + '"');
}
