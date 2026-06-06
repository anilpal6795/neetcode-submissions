class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pp = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
        const stack = [];
        for (const c of s) {
            if (Object.values(pp).includes(c)) {
                stack.push(c);
            } else if (stack.at(-1) === pp[c]) {
                stack.pop();
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
