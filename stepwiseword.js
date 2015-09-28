/** https://www.codeeval.com/open_challenges/202/ */
var fs = require("fs"),
    data,
    i,
    max,
    longestWord,
    result,
    repeat = function(num) {
        var str = '';
        for (var i = 0; i < num; i += 1) {
            str += '*'
        }
        return str;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        result = [];
        data = line.split(' ');
        longestWord = data[0];
        for (i = 1, max = data.length; i < max; i += 1) {
            if (data[i].length > longestWord.length) {
                longestWord = data[i];
            }
        }

        for (i = 0, max = longestWord.length; i < max; i += 1) {
            result.push(repeat(i) + longestWord[i]);
        }

        console.log(result.join(' '));
    }
});
