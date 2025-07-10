var isIsomorphic = function(s, t) {
    let mapS = {}, mapT = {};
    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] !== mapT[t[i]]) return false;
        mapS[s[i]] = i;
        mapT[t[i]] = i;
    }
    return true;
};
