/** https://www.codeeval.com/open_challenges/19/ */
var fs  = require("fs"),
    data,
    base2;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        data = line.split(',');
        base2 = (parseInt(data[0], 10)).toString(2);
        console.log(base2.substr(-data[1],1) === base2.substr(-data[2],1));
    }
});
