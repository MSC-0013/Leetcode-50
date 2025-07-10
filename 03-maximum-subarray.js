// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let max = nums[0], curr = nums[0];
    for(let i = 1; i < nums.length; i++) {
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(max, curr);
    }
    return max;
};
