/** https://www.codeeval.com/open_challenges/170/ */
var fs  = require("fs"),
    binarySearch = function(l, r) {
        var k = parseInt(l, 10),
            m = parseInt(r, 10),
            middle = Math.ceil((k + m)/2);
        return middle;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(' '),
            left = 0,
            right = data.shift(),
            answer = 0;

        for (var i = 0, max = data.length; i < max; i += 1) {
            answer = binarySearch(left, right);
            switch(data[i]) {
                case 'Lower':
                    right = answer - 1;
                    break;
                case 'Higher':
                    left = answer + 1;
                    break;
                case 'Yay!':
                    console.log(answer);
                    break;
            }
        }
    }
});