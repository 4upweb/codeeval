var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var output = '',
            up = true;
        for (var i = 0, max = line.length; i < max; i += 1) {
            if (line[i].match(/\w/i)) {
                output += up ? line[i].toUpperCase() : line[i].toLowerCase();
                up = !up;
            } else {
                output += line[i];
            }
        }
        console.log(output);
    }
});