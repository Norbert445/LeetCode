class MinStack {
  array: number[];
  i: number;
  constructor() {
    this.i = 0;
    this.array = [];
  }

  push(x: number): void {
    this.array.push(x);
  }

  pop(): void {
    this.array.pop();
  }

  top(): number {
    return this.array[this.array.length - 1];
  }

  getMin(): number {
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
