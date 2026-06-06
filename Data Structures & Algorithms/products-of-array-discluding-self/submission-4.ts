class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]) {
        const lip = [];
        const rip = [];
        for (const [i, _] of nums.entries()) {
            const j = nums.length - i - 1;

            if (i == 0) {
                lip[i] = nums[i];
                rip[j] = nums[j];
                continue;
            }

            lip[i] = nums[i] * lip[i - 1];
            rip[j] = nums[j] * rip[j + 1];
        }

        const result = nums.map((_, i) => {
            if (i == 0) {
                return rip[1];
            }

            if (i == nums.length - 1) {
                return lip[nums.length - 2];
            }

            return lip[i - 1] * rip[i + 1];
        });

        return result;
    }
}
