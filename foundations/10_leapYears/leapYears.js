const leapYears = function(year) {
    if(year % 400 === 0){
        return true
    } else if(year % 100 === 0){
        return false
    } else if(year % 4 === 0){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

// Divisible by 400 == LeapYear
// Divisible by 100 == noLeapYear
// Divisible by 4   == LeapYear