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
        console.log({ intervals });
        const result = [];
        result.push(intervals[0]);
        let toRemove = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < result[result.length - 1][1]) {
                toRemove++;

                if (result[result.length - 1][1] > intervals[i][1]) {
                    result.pop();
                    result.push(intervals[i]);
                }
            } else {
                result.push(intervals[i]);
            }
        }

        console.log({ result });

        return toRemove;
    }
}
