var fs  = require("fs");

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
        console.log(fibonacci(line));
    }
});