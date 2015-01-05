/** https://www.codeeval.com/open_challenges/172/ */
var fs  = require("fs"),
    checkDigit = function(num) {
        var digSumm = 0,
            double = num * 2;
        if (double >= 10) {
            digSumm += parseInt(double / 10, 10) + (double % 10);
        } else {
            digSumm += double;
        }
        return digSumm;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.replace(/\s/g, ''),
            summ = 0;

        for(var i = data.length - 1, counter = 1; i >= 0; i -= 1, counter += 1) {
            if (counter % 2 === 0) {
                summ += checkDigit(data[i]);
            } else {
                summ += +data[i];
            }
        }
    }
    console.log((summ % 10 === 0) ? 1 : 0);
});