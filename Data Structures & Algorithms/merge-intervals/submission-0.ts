class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [];
        result.push(intervals[0]);
        for (const interval of intervals) {
            const last = result[result.length - 1];
            if (interval[0] <= last[1]) {
                result[result.length - 1][1] = Math.max(interval[1], last[1]);
            } else {
                result.push(interval);
            }
        }

        return result;
    }
}
