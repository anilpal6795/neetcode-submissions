class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const lMin = [],
            rMin = [];
        const n = heights.length;

        let stack = [];
        for (let i = 0; i < n; i++) {
            if (i == 0) {
                lMin[i] = -1;
                stack.push(i);
                continue;
            }

            while (stack.length && heights[i] <= heights[stack.at(-1)]) {
                stack.pop();
            }

            lMin[i] = stack.length ? stack.at(-1) : -1;
            stack.push(i);
        }

        stack = [];
        for (let i = n - 1; i >= 0; i--) {
            if (i == n - 1) {
                rMin[i] = -1;
                stack.push(i);
                continue;
            }

            while (stack.length && heights[i] <= heights[stack.at(-1)]) {
                stack.pop();
            }

            rMin[i] = stack.length ? stack.at(-1) : -1;
            stack.push(i);
        }

        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            let leftIndex = lMin[i] === -1 ? 0 : lMin[i] + 1;
            let rightIndex = rMin[i] === -1 ? n-1 : rMin[i] - 1;
            const area = (rightIndex - leftIndex + 1) * heights[i];
            maxArea = Math.max(maxArea, area);
        }

        return maxArea;
    }
}
