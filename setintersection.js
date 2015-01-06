/** https://www.codeeval.com/open_challenges/30/ */
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(";"),
            left = data[0].split(","),
            right = data[1].split(","),
            output = [];
        for (var i = 0, max = left.length; i < max; i += 1) {
            if (right.indexOf(left[i]) !== -1) {
                output.push(left[i]);
            }
        }
        console.log(output.join(","));
    }
});