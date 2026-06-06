/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        const startTimes = intervals.map((i) => i.start).sort((a, b) => a - b);
        const endTimes = intervals.map((i) => i.end).sort((a, b) => a - b);
        let rooms = 0;
        let maxRooms = 0;
        let i = 0,
            j = 0;
        const n = intervals.length;
        while (i < n && j < n) {
            if (startTimes[i] < endTimes[j]) {
                i++;
                rooms += 1;
            } else {
                j++;
                rooms -= 1;
            }

            maxRooms = Math.max(maxRooms, rooms);
        }

        return maxRooms;
    }
}
