/** https://www.codeeval.com/open_challenges/45/ */
var fs = require("fs"),
    isPolindrome = function(num) {
        var str = String(num),
            len = str.length - 1;

        if (len > 0) {
            var isPol = true;
            for (var i = 0; i <= len / 2; i += 1) {
                if (str[i] !== str[len - i]) {
                    isPol = false;
                }
            }
            return isPol;
        }
        return false;
    },
    reverse = function(num) {
        var str = String(num),
            len = str.length - 1,
            result = [];
        if (len > 0) {
            for (var i = 0; i <= len / 2; i += 1) {
                result[i] = str[len - i];
                result[len - i] = str[i];
            }
        }
        return parseInt(result.join(''));
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var number = parseInt(line, 10),
            it = 1,
            value = number + reverse(number);

        while (!isPolindrome(value)) {
            value = value + reverse(value);
            it += 1;
            if (it > 100) {
                return;
            }
        }

        console.log(it + " " + value);
    }
});