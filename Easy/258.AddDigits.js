/**
 * Input: num = 38
 * Output: 2
 * 
 * 38 -> 3+ 8 = 11 -> 1+ 1-> 2
 */

var addDigits = function(num) {
    let res = 0;
    if(!Math.floor(num/10))return num;
 
    while(Math.floor(num/10)){
        while(num){
            res += num%10;
            num = Math.floor(num/10);
        }
        num = res;
        res =0
    }
    return num
};