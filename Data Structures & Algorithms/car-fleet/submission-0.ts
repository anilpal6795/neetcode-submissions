class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        const cars = position
            .map((pos, i) => ({
                position: pos,
                speed: speed[i],
            }))
            .sort((a, b) => b.position - a.position);

        const ttc = cars.map((car) => (target - car.position) / car.speed);

        let groups = 1;
        let j = 0;
        for (let i = 1; i < n; i++) {
            if (ttc[i] <= ttc[j]) continue;

            j = i;
            groups++;
        }

        return groups;
    }
}
