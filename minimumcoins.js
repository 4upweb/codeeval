/** https://www.codeeval.com/open_challenges/74/ */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var total = parseInt(line, 10),
            coinsFive = Math.floor(total / 5),
            coinsThree = 0,
            coinsOne = 0;

        total -= coinsFive * 5;
        if (total > 2) {
            coinsThree += Math.floor(total / 3);
        }
        total -= coinsThree * 3;
        coinsOne = total;

        console.log(coinsFive + coinsThree + coinsOne);
    }
});