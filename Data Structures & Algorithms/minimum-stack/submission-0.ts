class MinStack {
    stack: number[];
    auxStack: number[];
    constructor() {
        this.stack = [];
        this.auxStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if (this.auxStack.length === 0) {
            this.auxStack.push(val);
            return;
        }

        if (val < this.auxStack.at(-1)) {
            this.auxStack.push(val);
        } else {
            this.auxStack.push(this.auxStack.at(-1));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.auxStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.auxStack.at(-1);
    }
}
