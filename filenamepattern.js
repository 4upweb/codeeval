/** https://www.codeeval.com/open_challenges/169/ */
var fs = require("fs"),
    escape = function(str) {
        return str.replace(/[-\/\\^$*+?.()|\{}]/g, '\\$&');
    },
    convert = function(str) {
        var table = {'?' : '.', '*' : '.*'},
            result = '';
        for (var i = 0, max = str.length; i < max; i += 1) {
            if (table[str[i]]) {
                result += table[str[i]];
            } else {
                result += escape(str[i]);
            }
        }
        return '^' + result + '$';
    };
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(" "),
            reg = convert(data.shift()),
            output = [];
        for (var i = 0, max = data.length; i < max; i += 1) {
            if (data[i].match(RegExp(reg, 'ig'))) {
                output.push(data[i]);
            }
        }
        console.log((output.length === 0) ? '-' : output.join(" "));
    }
});