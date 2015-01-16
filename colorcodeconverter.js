/** https://www.codeeval.com/open_challenges/148/ */
var fs = require("fs"),
    toRGB = function(val) {
        var data = [],
            R,
            G,
            B;

        if (val.match(/^HSL/ig)) {
            data = val.slice(4, -1).split(",");
            var H = data[0],
                S = data[1],
                L = data[2];

            H /= 60;
            if (H < 0) {
                H = 6 - (-H % 6);
            }
            H %= 6;

            S = Math.max(0, Math.min(1, S / 100));
            L = Math.max(0, Math.min(1, L / 100));

            var C = (1 - Math.abs((2 * L) - 1)) * S,
                X = C * (1 - Math.abs((H % 2) - 1)),
                m = L - C / 2,
                Rt,
                Gt,
                Bt;

            if (H >= 0 && H < 1) {
                Rt = C;
                Gt = X;
                Bt = 0;
            } else if (H >= 1 && H < 2) {
                Rt = X;
                Gt = C;
                Bt = 0;
            } else if (H >= 2 && H < 3) {
                Rt = 0;
                Gt = C;
                Bt = X;
            } else if (H >= 3 && H < 4) {
                Rt = 0;
                Gt = X;
                Bt = C;
            } else if (H >= 4 && H < 5) {
                Rt = X;
                Gt = 0;
                Bt = C;
            } else if (H >= 5 && H < 6) {
                Rt = C;
                Gt = 0;
                Bt = X;
            }
            R = Math.round((Rt + m) * 255);
            G = Math.round((Gt + m) * 255);
            B = Math.round((Bt + m) * 255);
        } else if (val.match(/^HSV/ig)) {
            data = val.slice(4, -1).split(",");

            var H = Math.max(0, Math.min(360, data[0])),
                S = Math.max(0, Math.min(100, data[1])),
                V = Math.max(0, Math.min(100, data[2]));

            S /= 100;
            V /= 100;

            H /= 60;

            var I = Math.floor(H);
            var F = H - I;
            var P = V * (1 - S);
            var Q = V * (1 - F * S);
            var T = V * (1 - (1 - F) * S);

            switch (I) {
                case 0:
                    R = V, G = T, B = P;
                    break;
                case 1:
                    R = Q, G = V, B = P;
                    break;
                case 2:
                    R = P, G = V, B = T;
                    break;
                case 3:
                    R = P, G = Q, B = V;
                    break;
                case 4:
                    R = T, G = P, B = V;
                    break;
                case 5:
                    R = V, G = P, B = Q;
                    break;
            }

            R = Math.round(R * 255);
            G = Math.round(G * 255);
            B = Math.round(B * 255);
        } else if (val.match(/^#/ig)) {
            data = val.slice(1);
            R = parseInt(data.substring(0, 2), 16);
            G = parseInt(data.substring(2, 4), 16);
            B = parseInt(data.substring(4, 6), 16);
        } else {
            data = val.slice(1,-1).split(",");
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