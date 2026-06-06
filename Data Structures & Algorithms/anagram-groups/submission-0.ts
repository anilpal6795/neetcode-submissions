const getWordSignature = (word: string): string => {
    const count = new Array(26).fill(0);
    for (const c of word) {
        count[c.charCodeAt(0) - 97] += 1; // 97 = a
    }
    return count.join(",");
};

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]) {
        const result = {};
        for (const str of strs) {
            const signature = getWordSignature(str);
            result[signature] = result[signature] ? [...result[signature], str] : [str];
        }

        return Object.values(result);
    }
}
