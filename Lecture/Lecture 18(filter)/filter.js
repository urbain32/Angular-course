var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

// filtering an array
function filterFunction(value) {
  return value > 5;
}
var filterNumberArray = numberArray.filter(filterFunction);
console.log("filtered Number Array: ", filterNumberArray);
