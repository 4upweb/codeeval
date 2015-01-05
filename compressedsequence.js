/** https://www.codeeval.com/open_challenges/128/ */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(' '),
            counter = 1,
            output = [];

        if (data.length === 1) {
            output.push(counter + ' ' + data[0]);
        } else {
            for (var i = 0, max = data.length; i < max - 1; i += 1) {
                if (data[i + 1] === data[i]) {
                    counter += 1;
                } else {
                    output.push(counter + ' ' + data[i]);
                    counter = 1;
                }
            }
            output.push(counter + ' ' + data[data.length - 1]);
        }
        console.log(output.join(" "));
    }
});