// Given two binary strings a and b, return their sum as a binary string.

//Input: a = "11", b = "1"
// Output: "100"
// 0 + 0 = 0.
// 0 + 1 = 1.
// 1 + 0 = 1.
// 1 + 1 = 0, carry = 1.

let addBinary = (a, b) => {
    let l1 = a.length - 1;
    let l2 = b.length - 1;
    let carry = 0;
    let res = '';
    while (l1 >= 0 || l2 >= 0 || carry) {
        let c1 = parseInt(a[l1] || 0);
        let c2 = parseInt(b[l2] || 0);
        let sum = c1 ^ c2 ^ carry;
        carry = c1 & c2 || c2 & carry || c1 & carry;
        res = sum + res;
        l1--;
        l2--;
    }
    return res;
}