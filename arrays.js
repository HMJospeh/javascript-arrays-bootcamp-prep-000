var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];
chocolateBars;

function addElementToBeginningOfArray(array,element){
var myArray=[element,...array];
  return myArray;
}
addElementToBeginningOfArray('foo',[1]);

function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
 }
destructivelyAddElementToBeginningOfArray('foo',1);

function addElementToEndOfArray(array, element) {
  var myArray=[...array,element];
  return myArray;
}
addElementToEndOfArray(1,'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
var myArray=[1,2,3];
return myArray[2];
}

accessElementInArray(1,2,3);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

var myArray=[1,2,3];

function removeElementFromBeginningOfArray(array) {
myArray.slice(1);
  return array;
}
