var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.replace(/[)(,)]/ig, '').split(" ");
        console.log(Math.sqrt(
            Math.pow((parseInt(data[2], 10) - parseInt(data[0], 10)), 2) +
            Math.pow((parseInt(data[3], 10) - parseInt(data[1], 10)), 2)
        ));
    }
});