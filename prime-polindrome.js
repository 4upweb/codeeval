function getPrimes (max) {
    var sieve = [],
        i,
        j,
        primes = [];
    for (i = 2; i <= max; i += 1) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

var isPolindrome = function (num) {
    var str = String(num),
        len = str.length - 1;

    if (len > 0) {
        var isPol = true;
        for (var i = 0; i <= len/2; i += 1) {
            if (str[i] !== str[len-i]) {
                isPol = false;
            }
        }
        return isPol;
    }
    return false;
};

for(var primes = getPrimes(1000), i = primes.length - 1; i > 0; i -= 1) {
    if (isPolindrome(primes[i])) {
        console.log(primes[i]);
        return;
    }
}