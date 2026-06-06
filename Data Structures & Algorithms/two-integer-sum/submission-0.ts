class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number) {
        const map = new Map();
        for (const [index, num] of nums.entries()) {
            const diff = target - num;
            if (map.has(diff)) {
                return [map.get(diff), index];
            }
            map.set(num, index);
        }
    }
}
