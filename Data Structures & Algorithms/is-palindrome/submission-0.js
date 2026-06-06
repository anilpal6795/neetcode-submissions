function isAlphanumeric(c) {
    const code = c.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)
    ); // a-z
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let leftPtr = 0,
            rightPtr = s.length - 1;
        while (leftPtr <= rightPtr) {
            if (!isAlphanumeric(s[leftPtr])) {
                leftPtr++;
                continue;
            }
            if (!isAlphanumeric(s[rightPtr])) {
                rightPtr--;
                continue;
            }
            if (s[leftPtr].toLowerCase() !== s[rightPtr].toLowerCase()) return false;
            leftPtr++;
            rightPtr--;
        }
        return true;
    }
}
