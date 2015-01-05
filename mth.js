var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(' '),
            number = data.pop();
        if (number <= data.length) {
            console.log(data[data.length - number]);
        }
    }
});