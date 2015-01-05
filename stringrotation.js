/** https://www.codeeval.com/open_challenges/76/ */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(','),
            tmp,
            isRotation = false,
            strOne = data[0];

        for (var i = 0, max = strOne.length; i < max; i += 1) {
            tmp = strOne.charAt(0);
            strOne = strOne.slice(1) + tmp;
            if (strOne === data[1]) {
                isRotation = true;
                break;
            }
        }
        console.log(isRotation ? 'True' : 'False');
    }
});