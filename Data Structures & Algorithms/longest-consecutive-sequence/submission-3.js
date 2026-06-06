class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        const coveredSet = new Set();
        let maxSoFar = 0;

        const traverseLeft = (num) => {
            const prev = num - 1;
            if (!set.has(prev)) return 0;

            coveredSet.add(prev);
            return 1 + traverseLeft(prev);
        };

        const traverseRight = (num) => {
            const next = num + 1;
            if (!set.has(next)) return 0;

            coveredSet.add(next);
            return 1 + traverseRight(next);
        };

        for (const num of nums) {
            if (!coveredSet.has(num)) {
                coveredSet.add(num);
                const leftLen = traverseLeft(num);
                const rightLen = traverseRight(num);
                maxSoFar = Math.max(maxSoFar, 1 + leftLen + rightLen);
            }
        }

        return maxSoFar;
    }
}
