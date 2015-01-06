/** https://www.codeeval.com/open_challenges/96/ */
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var output = '';
        for (var i = 0, max = line.length; i < max; i += 1) {
            output += (line[i] === line[i].toUpperCase()) ? line[i].toLowerCase() : line[i].toUpperCase();
        }
        console.log(output);
    }
});