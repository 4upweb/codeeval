var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(" ");
        data.sort(function(a, b) {
            return parseFloat(a) - parseFloat(b);
        });
        console.log(data.join(" "));
    }
});