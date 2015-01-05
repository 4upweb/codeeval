function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(" ");
        for (var i = 0, max = data.length; i < max; i += 1) {
            data[i] = capitalize(data[i]);
        }
        console.log(data.join(" "));
    }
});