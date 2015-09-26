/** https://www.codeeval.com/open_challenges/62/ */
var fs = require("fs"),
    fn = function(val) {
        var summ = 0,
            num = val.toString();
        for (var i = 0, max = num.length; i < max; i += 1) {
            summ += (num[i] * num[i]);
        }
        return summ;
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        var range = 20,
            s = fn(line);
        while (s !== 1) {
            s = fn(s);
            range -= 1;
            if (range < 0) {
                console.log(0);
                return;
            }
        }
        console.log(1);
    }
});
