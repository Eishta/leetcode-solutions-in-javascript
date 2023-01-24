var isPowerOfTwo = function (n) {
    if (n < 1) return false;
    while (n % 2 == 0) n /= 2;
    return n === 1
};



// Math

var isPowerOfTwo = function (n) {
    return (Math.log10(n) / Math.log10(2)) % 1 == 0
};

/**
 * 2 ^ i = n , if n is a pwer of 2
 * take log 2 both sides =>  log2(2^i) = log3(n)   
 * i * log2(2) = log2(n)    
 * i = log2(n)           // bcz log2(2) = 1
 * i = log10(n) / log10(2)
 * 
 * so we are checking in the code , if log10(n) / log10(3) is an integer => any integer when divided by 1 gives no remainder , so the modulus is 0
 */