var isHappy = function(n) {
    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = String(n).split('').reduce((sum, digit) => sum + digit ** 2, 0);
    }
    return n === 1;
};
