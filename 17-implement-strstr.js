// https://leetcode.com/problems/implement-strstr/

var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    return haystack.indexOf(needle);
};
