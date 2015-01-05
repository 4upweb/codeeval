var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(','),
            digits = [],
            words = [],
            output;
        for (var i = 0, max = data.length; i < max; i += 1) {
            data[i].match(/\d/gi) ? digits.push(data[i]) : words.push(data[i]);
        }
        (words.length > 0 && digits.length > 0) ?
            console.log(words.join(',') + '|' + digits.join(',')) :
            (words.length > 0 ? console.log(words.join(',')) : console.log(digits.join(',')));
    }
});