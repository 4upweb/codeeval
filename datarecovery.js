/** https://www.codeeval.com/open_challenges/140/ */
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(";"),
            text = data[0].split(" "),
            cipher = data[1].split(" "),
            output = [];

        console.log(text.join(" "));
        console.log(cipher);

        for (var i = 0, max = text.length; i < max; i += 1) {
            var pos = parseInt(i + 1, 10),
                val = pos - 1;

                console.log(cipher[val]);

            if (cipher.indexOf('' + pos) === -1) {
                console.log(pos + ' not found!');
            //    output[pos] = text[max];
            } else {
                console.log(cipher[pos] + ' -> ' + text[pos]);
                output[cipher[val]] = text[pos];
            }


        }

        console.log(output.join(" "));
    }
});