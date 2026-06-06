class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const maxTemps = [];
        let maxIndex = 0;
        const n = temperatures.length;
        let i = 0;
        while(i < n){
            let j = maxTemps.length > 0 ? maxTemps[maxIndex] : n - 1
            if(j == i || j == 0) j = n - 1

            let maxTillEndIndex = 0
            while(j > i){
                if(temperatures[j] > temperatures[i]) maxTillEndIndex = j
                j--
            }
            maxTemps[i] = maxTillEndIndex;
            if(temperatures[i] > temperatures[maxIndex]){
                maxIndex = i;
            }
            i++
        }

        for(let i=0; i<n; i++){
            const index = maxTemps[i]
            maxTemps[i] = index !== 0 ? index - i : index
        }

        return maxTemps
    }
}
