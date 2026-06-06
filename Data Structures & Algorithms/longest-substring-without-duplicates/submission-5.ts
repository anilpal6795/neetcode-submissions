class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string) {
        let i = 0,
            j = 0;
        const n = s.length;
        const map = new Map();
        let maxLen = 0;
        while (i < n && j < n) {
            if (!map.has(s[j])) {
                map.set(s[j], j);
                maxLen = Math.max(maxLen, j - i + 1);
                j++;
            } else {
                while (i <= map.get(s[j])) {
                    map.delete(s[i]);
                    i++;
                }
            }
        }

        return maxLen;
    }
}
