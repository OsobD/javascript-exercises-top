const sumAll = function(max, min) {

    let sum = 0;

    if(!Number.isInteger(max) || !Number.isInteger(min)) return "ERROR" ;
    else if(max < 0 || min < 0) return "ERROR" ;

    if(min > max) [min, max] = [max, min] ;

    for (let i = min ; i <= max ; i++){
        sum += i
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;