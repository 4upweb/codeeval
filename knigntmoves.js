/** https://www.codeeval.com/open_challenges/180/ */
var fs  = require("fs"),
    SIZE = 8,
    moves = [[1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2]],
    letters = ['a','b','c','d','e','f','g','h'],
    output;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var x = parseInt(letters.indexOf(line.charAt(0)) + 1, 10),
            y = parseInt(line.charAt(1)),
            output = [];
        for (var i = 0, max = moves.length; i < max; i += 1) {
            var dx = parseInt(moves[i][0], 10),
                dy = parseInt(moves[i][1], 10);

            if (x + dx > 0 && x + dx <= SIZE && y + dy > 0 && y + dy <= SIZE) {
                output.push(letters[x + dx - 1] + '' + (y + dy));
            }
        }
        console.log(output.sort().join(" "));
    }
});