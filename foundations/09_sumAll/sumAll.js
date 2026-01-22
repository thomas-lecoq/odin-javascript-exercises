const sumAll = function sumAll(a ,b) {

    var array = [];
    const initialValue = 0;

    // in case of negative number, return ERROR
    if (a < 0 || b < 0) {
        return "ERROR"
    }

    // in case of float, return ERROR
    if (!Number.isInteger(a) || !Number.isInteger(b) ){
        return "ERROR"
    }

    // in case of non-number parameters, return ERROR
    if (!typeof a === 'Number' || !typeof b === 'Number') {
        return "ERROR"
    }

    // in case b < a, switch a and b value
    if (b < a) {
        [a, b] = [b, a];
    }

    // Create an array of values between a and b
    for (var i = a; i <= b; i++) {
        array.push(i);
    }

    // sum all values of the array
    const sumOfArray = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    return sumOfArray

};

// Do not edit below this line
module.exports = sumAll;
