var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(","),
            str = data[0],
            chars = new RegExp('[' + data[1].trim() + ']', 'ig');
        console.log(str.replace(chars, ''));
    }
});