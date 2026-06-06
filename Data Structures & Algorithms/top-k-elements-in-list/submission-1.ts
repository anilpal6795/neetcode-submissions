class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number) {
        const map: Record<number, number> = {};
        for (const num of nums) {
            if (map[num]) {
                map[num] += 1;
            } else {
                map[num] = 1;
            }
        }

        const sortedEntries = Object.entries(map).sort((a, b) => b[1] - a[1]);

        return sortedEntries.slice(0, k).map((item) => item[0]);
    }
}
