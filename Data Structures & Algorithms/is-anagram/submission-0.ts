class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {
        if (s.length != t.length) return false;

        const dict = {};
        let total = s.length;

        for (const c of s) {
            if (dict[c]) {
                dict[c] += 1;
            } else {
                dict[c] = 1;
            }
        }

        for (const c of t) {
            if (dict[c]) {
                dict[c] -= 1;
                total--;
            }
        }

        return total === 0;
    }
}
