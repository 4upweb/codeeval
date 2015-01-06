/** https://www.codeeval.com/open_challenges/148/ */
var fs = require("fs"),
    toRGB = function(val) {
        var data = [],
            R,
            G,
            B;

        console.log(val);

        if (val.match(/^HSL/ig)) {
            console.log('HSL');
            data = val.slice(4, -1).split(",");
            var H = data[0],
                S = data[1],
                L = data[2],
                C = (1 - Math.abs(2 * L - 1)) * S,
                X = C * (1 - Math.abs((H / 60) % 2 - 1)),
                m = L - C / 2,
                Rt,
                Gt,
                Bt;

            if (H >= 0 && H < 60) {
                Rt = C;
                Gt = X;
                Bt = 0;
            } else if (H >= 60 && H < 120) {
                Rt = X;
                Gt = C;
                Bt = 0;
            } else if (H >= 120 && H < 180) {
                Rt = 0;
                Gt = C;
                Bt = X;
            } else if (H >= 180 && H < 240) {
                Rt = 0;
                Gt = X;
                Bt = C;
            } else if (H >= 240 && H < 300) {
                Rt = X;
                Gt = 0;
                Bt = C;
            } else if (H >= 300 && H < 360) {
                Rt = C;
                Gt = 0;
                Bt = X;
            }
            R = Math.round(Rt + m);
            G = Math.round(Gt + m);
            B = Math.round(Bt + m);
        } else if (val.match(/^HSV/ig)) {
            console.log('HSV');
            data = val.slice(4, -1).split(",");
            console.log(data);
            var H = data[0],
                S = data[1],
                V = data[2],
                C = V * S,
                X = C * (1 - Math.abs((H / 60) % 2 - 1)),
                m = V - C,
                Rt,
                Gt,
                Bt;

            console.log('H= ' + H);
            console.log('S= ' + S);
            console.log('V= ' + V);
            console.log('C= ' + C);
            console.log('X= ' + X);
            console.log('m= ' + m);

            if (H >= 0 && H < 60) {
                Rt = C;
                Gt = X;
                Bt = 0;
            } else if (H >= 60 && H < 120) {
                Rt = X;
                Gt = C;
                Bt = 0;
            } else if (H >= 120 && H < 180) {
                Rt = 0;
                Gt = C;
                Bt = X;
            } else if (H >= 180 && H < 240) {
                Rt = 0;
                Gt = X;
                Bt = C;
            } else if (H >= 240 && H < 300) {
                Rt = X;
                Gt = 0;
                Bt = C;
            } else if (H >= 300 && H < 360) {
                Rt = C;
                Gt = 0;
                Bt = X;
            }

            console.log('Rt= ' + Rt);
            console.log('Gt= ' + Gt);
            console.log('Bt= ' + Bt);

            R = Math.round(Rt + m);
            G = Math.round(Gt + m);
            B = Math.round(Bt + m);
        } else if (val.match(/^#/ig)) {
            console.log('HEX');
            data = val.slice(1).split(",");
        } else {
            data = val.slice(1,-1).split(",");
            console.log(data);
            R = Math.round(255 * (1 - data[0]) * (1 - data[3]));
            G = Math.round(255 * (1 - data[1]) * (1 - data[3]));
            B = Math.round(255 * (1 - data[2]) * (1 - data[3]));
        }
        return 'RGB('+ R + ',' + G + ',' + B + ')';
    };
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
    if (line !== "") {
        console.log(toRGB(line));
    }
});