class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const n = nums.length;
        let i = 0,
            j = n - 1;
        while (i < j) {
            const m = i + Math.floor((j - i) / 2);

            if (nums[m] > nums[j]) {
                i = m + 1;
            } else {
                j = m;
            }
        }

        return nums[i];
    }
}
