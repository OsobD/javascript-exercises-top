const removeFromArray = function(array, ... arrayToRemove) {
    return array.filter(element => ! arrayToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;

// Find matches in an array
// Remove that element — splice, filter, or leave it empty?
// *** KEY: It must accept multiple values to remove — rest params (...) collect them into an array
// A comparison that doesn't explode into a giant chain of conditionals
// filter keeps what we want, so negate the condition to drop what we don't
// *** KEY: includes() uses strict equality (===) internally — type safety comes for free
// Could we use includes() negated inside an arrow function? Yes — that's the solution
//   Arrow + includes() is cleaner than a nested for loop