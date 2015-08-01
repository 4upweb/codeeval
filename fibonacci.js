var fs  = require("fs"),
    date = new Date();

var cached = [];

function fibonacciCached(x) {
    if (parseInt(x) === 0) return 0;
    if (parseInt(x) === 1) return 1;
    if (typeof cached[x] === "undefined") {
        cached[x] = fibonacciCached(x - 1) + fibonacciCached(x - 2);
    }
    return cached[x];
}

function fibonacci(x) {
    if (parseInt(x) === 0) return 0;
    if (parseInt(x) === 1) return 1;
    return fibonacci(x - 1) + fibonacci(x - 2);
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        /* run 1 without caching */
        //var oneStart = new Date().getTime();
        //console.log(fibonacci(line));
        //var oneEnd = new Date().getTime();

        /* run 2 with caching */
        var twoStart = new Date().getTime();
        console.log(fibonacciCached(line));
        var twoEnd = new Date().getTime();

        console.log('Run2: ' + (twoEnd - twoStart));
    }
});
