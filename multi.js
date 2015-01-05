var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(','),
            number = parseInt(data.shift(), 10),
            pow = parseInt(data.shift(), 10),
            i = 1,
            calc = pow;
        while (calc < number) {
            calc = pow * i++;
        }
        console.log(calc);
    }
});