/** https://www.codeeval.com/browse/214/ */
var fs  = require("fs"),
    times,
    sortFn = function(a, b) {
        var t1 = a.split(':'),
            t2 = b.split(':'),
            tObj1 = new Date(2000, 1, 1, t1[0], t1[1], t1[2]),
            tObj2 = new Date(2000, 1, 1, t2[0], t2[1], t2[2]);

        return tObj2.getTime() - tObj1.getTime();
    };

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        times = line.split(' ');
        times.sort(sortFn);
        console.log(times.join(' '));
    }
});
