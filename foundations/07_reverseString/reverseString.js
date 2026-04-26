const reverseString = function(arr) {

    let reverse = ""

    for(let i = arr.length - 1 ; i >= 0 ; i-- ){
        reverse += arr[i];
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
