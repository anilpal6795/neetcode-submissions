class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]) {
        const lps = new Array(height.length).fill(0);
        const rps = new Array(height.length).fill(0);

        for (let i = 0, j = height.length - 1; i < height.length; i++, j--) {
            if (i == 0) {
                lps[i] = height[i];
                rps[j] = height[j];
                continue;
            }

            lps[i] = Math.max(lps[i - 1], height[i]);
            rps[j] = Math.max(rps[j + 1], height[j]);
        }

        let result = 0;
        for (let i = 1; i < height.length - 1; i++) {
            result += Math.min(lps[i], rps[i]) - height[i];
        }

        return result;
    }
}
