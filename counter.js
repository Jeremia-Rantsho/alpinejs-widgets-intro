
function Counter() {
    return {
        count: 0,


        increment() {
            if (this.count >= 5) {
                this.count = 5;
            } else {
                this.count++;
            }


        },
        decrement() {
            if (this.count <= 0) {
                this.count = 0;
            } else {
                this.count--;
            }

        },
        reset() {
            this.count = 0;
        }
    };
}
