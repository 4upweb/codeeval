/** https://www.codeeval.com/open_challenges/29/ */
var fs  = require("fs"),
    data;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var filtered = [];
        data = line.split(',');
        for (var i = 0, max = data.length; i < max; i += 1) {
            if(filtered.indexOf(data[i]) === -1) {
                filtered.push(data[i]);
            }
        }
        console.log(filtered.join(','));
    }
});
