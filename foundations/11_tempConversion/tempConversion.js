const convertToCelsius = function(tempFahrenheit) {
  let tempConvertedToCelsius = (tempFahrenheit - 32) / 1.8;
  return Math.round(tempConvertedToCelsius * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  let tempConvertedToFahrenheit = (tempCelsius * 1.8) + 32;
  return Math.round(tempConvertedToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Celsius to Fahrenheit = (C * 1.8) + 32
// Fahrenheit to Celsius = (F - 32) / 1.8