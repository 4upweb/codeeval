/** https://www.codeeval.com/open_challenges/199/ */
var fs = require("fs"),
    data,
    i,
    max,
    result;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        data = line.split(' ');
        result = '';
        for (i = 0, max = data[1].length; i < max; i += 1) {
            if (data[1][i] === '1') {
                result += data[0][i].toUpperCase();
            } else {
                result += data[0][i];
            }
        }
        console.log(result);
    }
});
