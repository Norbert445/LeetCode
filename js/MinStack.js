"use strict";
class MinStack {
    constructor() {
        this.i = 0;
        this.array = [];
    }
    push(x) {
        this.array.push(x);
    }
    pop() {
        this.array.pop();
    }
    top() {
        return this.array[this.array.length - 1];
    }
    getMin() {
        return Math.min(...this.array);
    }
}
var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
console.log(obj);
