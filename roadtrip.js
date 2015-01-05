/** https://www.codeeval.com/open_challenges/124/ **/
var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var data = line.split(';'),
            distances = [],
            output = [],
            i,
            max;

        for (i = 0, max = data.length - 1; i < max; i += 1) {
            distances.push(data[i].split(',')[1]);
        }

        distances.sort(function(a, b) {
            return a - b;
        });

        output.push(distances[0]);

        for(i = 0, max = distances.length; i < max - 1; i += 1) {
            output.push(distances[i+1] - distances[i]);
        }

        console.log(output.join(','));
    }
});