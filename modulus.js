/** https://www.codeeval.com/open_challenges/62/ */
var fs  = require("fs"),
    data;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        data = line.split(',');
        console.log(data[0] - data[1] * (Math.floor(data[0] / data[1])));
    }
});
