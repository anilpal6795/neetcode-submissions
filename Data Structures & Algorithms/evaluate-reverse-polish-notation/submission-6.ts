class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    operate(first: number, second: number, op: string): number {
        switch (op) {
            case "+":
                return first + second;
            case "-":
                return second - first;
            case "*":
                return first * second;
            case "/":
                return Math.trunc(second / first);
        }
    }
    evalRPN(tokens: string[]): number {
        const stack = [];
        const op = ["+", "-", "*", "/"];
        for (const token of tokens) {
            if (!op.includes(token)) {
                stack.push(Number(token));
            } else {
                const first = stack.pop();
                const second = stack.pop();
                const result = this.operate(first,second, token);
                stack.push(result);
            }
        }

        return stack.pop()
    }
}
