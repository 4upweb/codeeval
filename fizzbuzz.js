var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(" "),
            f = parseInt(data[0] , 10),
            b = parseInt(data[1], 10),
            counter = parseInt(data[2], 10),
            output = '';

        for (var i = 1; i <= counter; i += 1) {
            if (0 === i % f && 0 === i % b) {
                output += 'FB ';
            } else {
                if (0 === i % f) {
                    output += 'F ';
                } else if (0 === i % b) {
                    output += 'B ';
                } else {
                    output += i + ' ';
                }
            }
        }

        console.log(output);
    }
});