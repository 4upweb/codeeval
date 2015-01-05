var fs = require("fs"),
    counter = 0,
    num = 0,
    lines = [];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        if (counter === 0) {
            num = parseInt(line, 10);
        } else {
            lines.push({str: line, len:line.length});
        }
    }
    ++counter;
});

lines.sort(function(a, b) {
    return b.len - a.len;
});

for (var i = 0; i < num; i += 1) {
    console.log(lines[i].str);
}