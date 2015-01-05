function getPrimes (cnt) {
    var sieve = [],
        i,
        j,
        primes = [],
        counter = 0;
    for (i = 2; counter < cnt; i += 1) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            counter += 1;
            primes.push(i);
            for (j = i << 1; j <= 10000; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

var summ = 0;

for(var primes = getPrimes(1000), i = primes.length - 1; i >= 0; i -= 1) {
    summ += primes[i];
}

console.log(summ);