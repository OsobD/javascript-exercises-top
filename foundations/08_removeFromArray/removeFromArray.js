const removeFromArray = function(array, ... arrayToRemove) {
    return array.filter(element => ! arrayToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

// Find matches in an array
// Remove that element — splice, filter, or leave it empty?
// A comparison that doesn't explode into a giant chain of conditionals
// filter keeps what i want, so negate the condition to drop other elements
// includes() uses strict equality (===) internally
// Could use includes() negated inside an arrow function?
// Arrow + includes() is cleaner than a nested for loop