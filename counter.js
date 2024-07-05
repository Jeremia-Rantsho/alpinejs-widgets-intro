
function Counter() {
    return {
        count: 0,

        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        reset() {
            this.count = 0;
        }
    };
}
