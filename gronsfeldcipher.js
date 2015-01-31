/** https://www.codeeval.com/open_challenges/181/ */
var fs  = require("fs"),
    alphabet = ' !"#$%&\'()*+,-./0123456789:<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(";"),
            key = data[0],
            message = data[1],
            output = '';

        for (var i = 0, max = message.length, klength = key.length; i < max; i += 1) {
            var position = alphabet.indexOf(message[i]) - key[i % klength];
            if (position < 0) {
                position = alphabet.length + position;
            }
            output += alphabet[position];
        }

        console.log(output);
    }
});