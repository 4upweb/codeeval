/** https://www.codeeval.com/open_challenges/179/ */
var fs  = require("fs"),
    digitsWithoutDots = {
        '0' : '11111100',
        '1' : '01100000',
        '2' : '11011010',
        '3' : '11110010',
        '4' : '01100110',
        '5' : '10110110',
        '6' : '10111110',
        '7' : '11100000',
        '8' : '11111110',
        '9' : '11110110'
    },
    replaceAt = function(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    },
    checkDigitOnDisplay = function(display, digit) {
        var possible = true;
        for (var i = 0, max = display.length; i < max; i += 1) {
            if (display[i] === '0' && digit[i] === '1') {
                possible = false;
                break;
            }
        }
        return possible;
    };
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(";"),
            display = data[0].split(" "),
            number = data[1],
            actualDigits = [],
            i,
            max,
            counter = 0,
            possibility = 0;

        for (i = 0, max = number.length; i < max; i += 1) {
            if (number[i] === '.') {
                actualDigits[i - 1] = replaceAt(actualDigits[i - 1], 7, '1');
            } else {
                actualDigits.push(digitsWithoutDots[number[i]]);
            }
        }

        for (i = 0, max = display.length; i < max; i += 1) {
            if (counter < actualDigits.length) {
                if (checkDigitOnDisplay(display[i], actualDigits[counter])) {
                    counter += 1;
                }
                if (counter === 12) {
                    possibility = 1;
                }
            } else {
                possibility = 1;
            }
        }
        console.log(possibility);
    }
});