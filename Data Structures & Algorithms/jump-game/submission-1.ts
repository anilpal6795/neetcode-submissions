class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        const n = nums.length;
        const dp = new Array(n);
        dp[n-1] = true;
        let lastReachable = n - 1;
        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] >= lastReachable - i) {
                dp[i] = true;
                lastReachable = i;
            } else {
                dp[i] = false;
            }
        }

        return dp[0];
    }
}
