/** https://www.codeeval.com/open_challenges/104/ */
var fs = require("fs"),
    data,
    i,
    max,
    result,
    map = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        data = line.split(';');
        result = '';
        for (i = 0, max = data.length; i < max; i += 1) {
            result += map[data[i]];
        }
        console.log(result);
    }
});
