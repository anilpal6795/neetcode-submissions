class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]) {
        let l = 0,
            r = heights.length - 1;
        let maxSoFar = 0;
        while (l < r) {
            const area = Math.min(heights[l], heights[r]) * (r - l);
            maxSoFar = Math.max(area, maxSoFar);

            if (heights[l] > heights[r]) {
                r--;
            } else if (heights[l] < heights[r]) {
                l++;
            } else {
                l++;
                r--;
            }
        }

        return maxSoFar;
    }
}
