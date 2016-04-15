function sum (x,y) {
  //console.log('"The sum of ' + x + ' and ' + y + ' is ' + (x + y) + '"');
  var sumOutput = document.getElementById('sum');
  sumOutput.textContent = '"The sum of ' + x + ' and ' + y + ' is ' + (x + y) + '"';
  return x + y;
}

function multiply(x,y) {
  //console.log('"The product of ' + x + ' and ' + y + ' is ' + (x * y) + '"');
  var multiplyOutput = document.getElementById('multiply');
  multiplyOutput.textContent = '"The product of ' + x + ' and ' + y + ' is ' + (x * y) + '"';
  return x * y;
}

function sumAndMultiply(x,y,z) {
  var sumProductArray = [];
  sumProductArray.push(sum(sum(x,y),z));
  sumProductArray.push(multiply(multiply(x,y),z));

  var sumMultiplyOutput = document.getElementById('sumAndMultiply');
  sumMultiplyOutput.textContent = '"' + x + ' and ' + y + ' and ' + z + ' sum to ' + sumProductArray[0] + '"';
  //console.log('"' + x + ' and ' + y + ' and ' + z + ' sum to ' + sumProductArray[0] + '"');

  var sumMultiplyOutput2 = document.getElementById('sumAndMultiply2');
  sumMultiplyOutput2.textContent = '"The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + sumProductArray[1] + '"';
  //console.log('"The numbers ' + x + ' and ' + y + ' and ' + z + ' have a product of ' + sumProductArray[1] + '"');
}

function sumArray(someArray) {
  var sum = 0;
  for (var i = 0; i < someArray.length; i++) {
    sum += someArray[i];
  };
  var sumArrayOutput = document.getElementById('sumArray');
  sumArrayOutput.textContent = '"' + someArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum"';
  //console.table(someArray);
  //console.log('"' + someArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum"');
}

//wonderfull function name
function productArray(someArray) {
  var product = 1;
  for (var i = 0; i < someArray.length; i++) {
    product = product * (someArray[i]);
  }
  var productArrayOutput = document.getElementById('multiplyArray');
  productArrayOutput.textContent = '"' + 'The numbers ' + someArray + ' have a product of ' + product + '"';
  //console.table(someArray);
  //console.log('"' + 'The numbers ' + someArray + ' have a product of ' + product + '"');
}
