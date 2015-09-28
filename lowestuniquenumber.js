/** https://www.codeeval.com/open_challenges/103/ */
var fs = require("fs"),
    data,
    i,
    max,
    result,
    lowest,
    table;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        data = line.split(' ');
        table = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
        lowest = 0;

        //Fill up the table.
        for (i = 0, max = data.length; i < max; i += 1) {
            table[data[i]] += 1;
        }

        for (var j in table) {
            if (table.hasOwnProperty(j)) {
                if (table[j] === 1) {
                    lowest = j;
                    break;
                }
            }
        }

        if (lowest !== 0) {
            console.log(data.indexOf('' + lowest) + 1);
        } else {
            console.log(0);
        }

    }
});
