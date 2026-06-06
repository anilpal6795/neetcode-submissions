class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let sum = 0;
        let maxSum = nums[0];
        for (let i = 0; i < nums.length; i++) {
            if (sum < 0) {
                sum = nums[i];
            } else {
                sum += nums[i];
            }

            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
}
