const repeatString = function repeatStr(string, num) {

    // Preventing negative number of repeat
    if (num < 0) {
        return 'ERROR'
    }

    let repeatedString = '';

    for (let i = 0; i < num; i++) {
        repeatedString += string;
    }
    
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
