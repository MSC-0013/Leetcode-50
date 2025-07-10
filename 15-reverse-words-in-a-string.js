// https://leetcode.com/problems/reverse-words-in-a-string/

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};
