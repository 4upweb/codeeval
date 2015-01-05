/** https://www.codeeval.com/open_challenges/158/ */
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split('|'),
            counter = 0,
            tmp,
            iterations = data.pop().trim(),
            items = data[0].trim().split(" ");

        for (var i = items.length - 1; i >= 0; i -= 1) {
            if (counter++ < iterations){
                for (var j = 0; j < i; j += 1) {
                    if (parseInt(items[j], 10) > parseInt(items[j + 1], 10)) {
                        tmp = items[j];
                        items[j] = items[j + 1];
                        items[j + 1] = tmp;
                    }
                }
            }
        }
        console.log(items.join(" "));
    }
});