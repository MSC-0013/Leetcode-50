var checkInclusion = function(s1, s2) {
    let need = Array(26).fill(0);
    let window = Array(26).fill(0);

    for (let c of s1) need[c.charCodeAt() - 97]++;

    for (let i = 0; i < s2.length; i++) {
        window[s2[i].charCodeAt() - 97]++;
        if (i >= s1.length) {
            window[s2[i - s1.length].charCodeAt() - 97]--;
        }
        if (need.join() === window.join()) return true;
    }
    return false;
};
