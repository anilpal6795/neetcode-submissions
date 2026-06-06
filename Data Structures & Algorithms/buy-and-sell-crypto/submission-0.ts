class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]) {
        const n = prices.length;
        const min = new Array(n);
        const max = new Array(n);
        min[0] = prices[0];
        max[n - 1] = prices[n - 1];
        for (let i = 1; i < n; i++) {
            min[i] = Math.min(prices[i], min[i - 1]);
        }
        for (let i = n - 2; i >= 0; i--) {
            max[i] = Math.max(prices[i], max[i + 1]);
        }

        let maxSoFar = 0;
        for (let i = 0; i < n; i++) {
            const profit = max[i] - min[i];
            maxSoFar = Math.max(maxSoFar, profit);
        }

        return maxSoFar;
    }
}
