const convertToCelsius = function convertToCelsius(farheinheitTemp) {
  let temp = parseFloat(((farheinheitTemp - 32) * 5/9).toFixed(1));
  
  if (temp === parseInt(temp)) {
    return Math.floor(temp)
  } else {
    return temp
  }
};

const convertToFahrenheit = function convertToFahrenheit(celsiusTemp) {
  let temp = parseFloat((celsiusTemp * 9/5 + 32).toFixed(1));
    if (temp === parseInt(temp)) {
    return Math.floor(temp)
  } else {
    return temp
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
