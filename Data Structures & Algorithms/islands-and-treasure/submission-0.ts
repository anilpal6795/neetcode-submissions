const maxNum = 2147483647;
class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const rows = grid.length,
            cols = grid[0].length;

        const traverse = (i = 0, j = 0, distance = 0) => {
            if (
                i < 0 ||
                i >= rows ||
                j < 0 ||
                j >= cols ||
                grid[i][j] === -1 ||
                (grid[i][j] === 0 && distance > 0)
            )
                return;

            if (grid[i][j] > distance || grid[i][j] === 0) {
                grid[i][j] = distance;
                traverse(i + 1, j, distance + 1);
                traverse(i - 1, j, distance + 1);
                traverse(i, j + 1, distance + 1);
                traverse(i, j - 1, distance + 1);
            }
        };

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 0) {
                    traverse(i, j, 0);
                }
            }
        }
    }
}
