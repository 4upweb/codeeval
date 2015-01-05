var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split('|'),
            listOne = data[0].trim().split(" "),
            listTwo = data[1].trim().split(" "),
            output = '';
        for (var i = 0, max = listOne.length; i < max; i += 1) {
            output += listOne[i] * listTwo[i] + " ";
        }
        console.log(output);
    }
});