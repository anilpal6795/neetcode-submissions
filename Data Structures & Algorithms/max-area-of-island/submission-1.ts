class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const rows = grid.length,
            cols = grid[0].length;

        const sinkAndCount = (i: number, j: number): number => {
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
                return 0;
            }

            grid[i][j] = 0;

            return (
                1 +
                sinkAndCount(i + 1, j) +
                sinkAndCount(i - 1, j) +
                sinkAndCount(i, j + 1) +
                sinkAndCount(i, j - 1)
            );
        };

        let maxCount = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    const count = sinkAndCount(i, j);
                    maxCount = Math.max(maxCount, count);
                }
            }
        }

        return maxCount;
    }
}
