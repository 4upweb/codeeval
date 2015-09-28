/** https://www.codeeval.com/open_challenges/112/ */
var fs = require("fs"),
    data,
    i,
    max,
    sequence,
    steps,
    swaps,
    tmp;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        data = line.split(' : ');
        sequence = data[0].split(' ');
        steps = data[1].split(', ');
        for (i = 0, max = steps.length; i < max; i += 1) {
            swaps = steps[i].split('-');
            tmp = sequence[swaps[0]];
            sequence[swaps[0]] = sequence[swaps[1]];
            sequence[swaps[1]] = tmp;
        }
        console.log(sequence.join(" "));
    }
});
