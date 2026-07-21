class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length,
            cols = grid[0].length;

        function sink(i: number, j: number) {
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") return;

            grid[i][j] = "0";
            sink(i + 1, j);
            sink(i - 1, j);
            sink(i, j + 1);
            sink(i, j - 1);
        }

        let count = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1") {
                    count++;
                    sink(i, j);
                }
            }
        }

        return count;
    }
}
