/** https://www.codeeval.com/open_challenges/92/ */
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var words = line.split(" ");
        console.log(words[words.length - 2]);
    }
});