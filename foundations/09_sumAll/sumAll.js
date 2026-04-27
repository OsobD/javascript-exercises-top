const sumAll = function(number1, number2) {

    let bigger = 0;
    let lower = 0;
    let sum = 0;

    if(!Number.isInteger(number1) || !Number.isInteger(number2) || number1 < 0 || number2 < 0){
        return "ERROR";
    };

    if(number1 > number2) {
        bigger = number1
        lower = number2
    }else if(number2 > number1){
        bigger = number2
        lower = number1
    }

    for (let i = lower ; i <= bigger ; i++){
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Array to sume all?
// Dont matter the order for imput
// Cant use floats, non numbers and negatives
// Reduce with some ifs to avoid that elements

// 1 100
// 1 + 2 + 3 + 4 + ... + 100
// 1   3   6   10