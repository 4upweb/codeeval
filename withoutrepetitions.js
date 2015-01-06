/** https://www.codeeval.com/open_challenges/173/ */
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var output = '';
        for (var i = 0, max = line.length; i < max; i += 1) {
            if (line[i] !== line[i + 1]) {
                output += line[i];
            }
        }
        console.log(output);
    }
});