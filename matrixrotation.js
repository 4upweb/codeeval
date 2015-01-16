/** https://www.codeeval.com/open_challenges/178/ */
var fs  = require("fs"),
    rotate = function(data) {
        var size = Math.sqrt(data.length),
            output = [];
        for (var i = 0; i < size; i += 1) {
            for (var j = 1; j <= size; j += 1) {
                output.push(data[data.length - size * j + i]);
            }
        }
        return output;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(" ");
        console.log(rotate(data).join(" "));
    }
});