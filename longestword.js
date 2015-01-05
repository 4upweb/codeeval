var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(" "),
            len = [];
        for(var i = 0, max = data.length; i < max; i += 1) {
            len[i] = data[i].length;
        }
        console.log(data[len.indexOf(Math.max.apply(Math, len))]);
    }
});