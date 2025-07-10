var countBits = function(n) {
    let res = Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }
    return res;
};
