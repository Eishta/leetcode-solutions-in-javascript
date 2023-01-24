// Recursive Method
// example digits = '23'
var letterCombinations = function (digits) {
    if (!digits || digits.length === 0) return [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    // i can also be considered as the length of the string s passed 
    let res = [];
    const backtrack = (i, s) => {    // s is  current string with which the digit at index i will form combinations, digit at 0 = 2 , map = abc will form combination with '' => [a,b ,c]
        if (i == digits.length) {// ex- when i = 2
            res.push(s);
            return;
        }

        let cur = map[digits[i]];   // 'abc' for 2, 'def' for 3, when i = 0 , map["2"] == cur = 'abc
        for (let c of cur) { // a,b,c         d,e,f
            backtrack(i + 1, s + c);
        }
    }
    backtrack(0, ''); 
    return res;
};

// Iterative Method

let letterCmomboIterative = (digits) => {
    if (!digits || !digits.length) return [];
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let res = [''];
    for (let digit of digits) {
        let temp = res;
        res = [];
        for (let s of temp) {
            for (let c of map[digit]) {
                res.push(s + c);
            }
        }
    }
    return res;
}

// Steps 
/**
 * 1. we need to create a map for evry digit in a phone 
 * 2. loop over the digits pressed 
 * 3. first , the 1st and 2nd digit will form combination and store in res
 * 4. then the res will form combination with the 3rd digit and store in res again, as res is updated within loop , its value is saved in temp and it is cleared 
 * 5. At the end, return the res.
 * 
 * Why res = [""] ? => We want an array of the letters in the first digit => if permitted , we can initialise it as
 *     res = digits[0].split('')
 * and then the digits loop starts from index 1
 */