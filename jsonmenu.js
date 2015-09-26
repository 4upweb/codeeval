/** https://www.codeeval.com/open_challenges/102/ */
var fs  = require("fs"),
    menu,
    summ,
    i,
    tmp;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        menu = JSON.parse(line);
        summ = 0;
        for (i = 0, max = menu.menu.items.length; i < max; i += 1) {
            tmp = menu.menu.items[i] && menu.menu.items[i].label;
            if (typeof tmp !== 'undefined' && tmp !== null) {
                summ += menu.menu.items[i].id;
            }
        }
        console.log(summ);
    }
});
