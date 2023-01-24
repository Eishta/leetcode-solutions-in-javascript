var isPowerOfFour = function (n) {
    if (n < 1) return false;
    while (n % 4 === 0) n /= 4
    return n == 1
};


var isPowerOfFourMath = function (n) {
    return (Math.log10(n) / Math.log10(4)) % 1 === 0
};

/**
 * 4 ^ i = n , if n is a pwer of 4
 * take log 4 both sides =>  log4(4^i) = log3(n)   
 * i * log4(4) = log4(n)    
 * i = log4(n)           // bcz log4(4) = 1
 * i = log10(n) / log10(4)
 * 
 * so we are checking in the code , if log10(n) / log10(3) is an integer => any integer when divided by 1 gives no remainder , so the modulus is 0
 */