/** https://www.codeeval.com/open_challenges/122/ */
var fs = require("fs"),
    data,
    i,
    max,
    result,
    map = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'],
    tmp;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        result = [];
        for (i = 0, max = line.length; i < max; i += 1) {
            if (isNaN(line[i])) {
                tmp = map.indexOf(line[i]);
                if(tmp !== -1) {
                    result.push(tmp);
                }
            } else {
                result.push(line[i]);
            }
        }
        if (result.length > 0) {
            console.log(result.join(''));
        } else {
            console.log('NONE');
        }
    }
});
