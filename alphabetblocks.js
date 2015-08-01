/** https://www.codeeval.com/open_challenges/201/ */
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split("|"),
            numBlocks = parseInt(data[0], 10),
            word = data[1].trim(),
            blocks = data[2].trim().split(" ");
            //tracks = data[1].split(" "),
            //counter = 0,
            //profit = 0,
            //output = 0;

        console.log(numBlocks);
        console.log(word);
        console.log(blocks);

        //for (var i = 0, max = tracks.length; i < max; i += 1) {
        //    if (counter < days) {
        //        profit += parseInt(tracks[i], 10);
        //        counter += 1;
        //    } else if (counter === days) {
        //        profit += parseInt(tracks[i], 10);
        //        profit -= parseInt(tracks[i - days], 10)
        //    }
        //    if (profit > output) {
        //        output = profit;
        //    }
        //}
        //console.log(output);
    }
});