var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var data = line.split(" "),
            width = parseInt(data.shift(), 10),
            d = parseInt(data.shift(), 10),
            n = parseInt(data.shift(), 10),
            points = [],
            border = 6,
            bats = data.slice(),
            i,
            j,
            rborder;

        if (n === 0) {
            for (i = border; i <= width - border; i += d) {
                points.push(i);
            }
        } else {
            bats.sort(function(a, b) {
                return a - b;
            });

            for(i = parseInt(bats[0]); i >= border; i -= d) {
                if (i - d >= border) {
                    points.push(i - d);
                }
            }

            if (bats.length > 1) {
                for (i = 0; i < bats.length - 1; i += 1) {
                    var v = parseInt(bats[i], 10) + d,
                        k = parseInt(bats[i + 1], 10) - d;

                    while (v <= k) {
                        points.push(v);
                        v += d;
                    }
                }
            }

            for(i = parseInt(bats[bats.length - 1]); i <= width - border; i += d) {
                if (i + d <= width - border) {
                    points.push(i + d);
                }
            }
        }
        console.log(points.length);
    }
});