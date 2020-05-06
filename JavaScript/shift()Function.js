// That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];

// Only change code below this line
var removedFromMyArray;
removedFromMyArray = myArray.shift();
//it also changes the initail array

// Setup
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);