/** https://www.codeeval.com/open_challenges/97/ */
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split("|"),
            text = data[0],
            cipher = data[1].trim().split(" "),
            output = '';
        for (var i = 0, max = cipher.length; i < max; i += 1) {
            output += text[cipher[i] - 1];
        }
        console.log(output);
    }
});