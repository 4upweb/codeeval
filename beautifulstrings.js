var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //1. calculate frequency
        var data = line.replace(/\W/gi, ''),
            dict = [],
            freq = [],
            highestRate = 26;

        for (var i = 0, max = data.length; i < max; i += 1) {
            var char = data[i].toLowerCase();

            if (dict.indexOf(char) === -1) {
                dict.push(char);
                freq.push({str: char, len:1});
            } else {
                console.log(char);
                console.log(freq.char);
                break;
                freq[char]['len'] += 1;
            }
        }

        console.log(freq);

        //freq.sort(function(a, b){
        //    console.log(this);
        //    console.log(a);
        //    console.log(b);
        //    return a - b;
        //});

        //for (var j = 0, max = dict.length; j < max; j += 1) {
        //    console.log(dict[j] + " : " + freq[dict[j]]);
        //}

        //console.log(freq);

        //2. sort by desc

        //3. calculate from 26 till the lowest
    }
});