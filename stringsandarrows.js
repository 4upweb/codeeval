/** https://www.codeeval.com/browse/203/ */
var fs  = require("fs"),
    checker = function(text, str) {
        var nums = 0;

        for (var i = 0, max = text.length; i < max; i += 1) {
            var index = text.indexOf(str, i);
            if (index !== -1) {
                nums += 1;
                i = index;
            }
        }

        return nums;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var arrows = ['>>-->','<--<<'],
            counter = 0;

        for (var i = 0, max = arrows.length; i < max; i += 1) {
            counter += checker(line, arrows[i]);
        }

        console.log(counter);
    }
});