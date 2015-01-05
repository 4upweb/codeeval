var fs  = require("fs");
var summ = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    summ += +line;
});
console.log(summ);