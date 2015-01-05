var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(",");
        console.log(data[0].match(new RegExp(data[1].trim() + '$', 'ig')) ? 1 : 0);
    }
});