var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(","),
            found = -1;
        for (var i = data[0].length - 1; i >= 0; i -= 1) {
            if (data[0][i].indexOf(data[1]) !== -1) {
                found = i;
                break;
            }
        }
        console.log(i);
    }
});