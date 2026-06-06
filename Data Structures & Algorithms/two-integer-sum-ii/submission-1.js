class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lp = 0,
            rp = numbers.length - 1;
        while (lp <= rp) {
            const sum = numbers[lp] + numbers[rp];
            if (sum === target) return [lp + 1, rp + 1];
            if (sum < target) {
                lp++;
                continue;
            }
            if (sum > target) {
                rp--;
                continue;
            }
        }
        return [];
    }
}
