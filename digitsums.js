var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var str = String(line),
            summ = 0;
        for (var i in str) {
            summ += +str[i];
        }
        console.log(summ);
    }
});