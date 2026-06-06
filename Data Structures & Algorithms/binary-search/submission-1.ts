class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const n = nums.length;
        let l = 0,
            r = n - 1;
        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2);
            const num = nums[mid];

            if (num === target) return mid;

            if (num < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}
