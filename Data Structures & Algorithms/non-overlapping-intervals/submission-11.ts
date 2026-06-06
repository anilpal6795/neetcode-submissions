class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => {
            if (a[0] == b[0]) return a[1] - b[1];

            return a[0] - b[0];
        });
        let last = intervals[0];
        let toRemove = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < last[1]) {
                toRemove++;

                if (last[1] > intervals[i][1]) {
                    last = intervals[i];
                }
            } else {
                last = intervals[i];
            }
        }

        return toRemove;
    }
}
