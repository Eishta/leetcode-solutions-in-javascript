var MinStack = function () {
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length == 0) {
        this.stack.push([val, val])
    } else {
        let min = this.getMin();
        this.stack.push([val, Math.min(val, min)])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][0];
};
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1][1];
};
// --------------------------------Executin 
let m = new MinStack()
m.push(7)
m.push(1)
m.top()
1
m.getMin()
1
m
[7, 7], [1, 1]
m.push(3)

m
[7, 7]
[1, 1]
[3, 1]