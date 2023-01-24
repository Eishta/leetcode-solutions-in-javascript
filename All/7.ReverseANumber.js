// cannot use tostring()
// if reversed number > 2**31 return 0
// -2**31 <= x <= 2**31 - 1
var reverse = function(x) {
   let result = 0;

    for(let  i=x; i; i= Math.trunc(i/10)){
        result = result *10 + i %10;
    }
    if(Math.abs(result) > Math.pow(2, 31)-1){
     return 0;
    }
    return result;
};
