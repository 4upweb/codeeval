function padding(l) {
    var padd = "";
    for (var i = 0; i < 4 - l; i += 1) {
        padd += " ";
    }
    return padd;
}

for (var i = 1; i <= 12; i += 1) {
    var line = [];
    for (var j = 1; j <=12; j += 1) {
        var val = String(i*j);
        line.push(padding(val.length) + val);
    }
    console.log(line.join(''));
}