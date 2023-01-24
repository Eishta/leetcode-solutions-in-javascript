// Mathod 1 - Iterative 

var isPowerOfThree = function (n) {
    if (n < 1) return false;  // why we didnt put less than 3? bcz 1 is a power of 3 => 3 ^ 0

    while (n % 3 === 0) { // until n is properly divisible by 3
        n /= 3;           // n = n/3
    }
    return n == 1;         // the loop should end at n=1, 3/3 = 1
};

// Time Complexity : O (log3(N)), Space Complexity: O(1)


//Method 2- Math

var isPowerOfThreeMath = function (n) {
    return (Math.log10(n) / Math.log10(3)) % 1 === 0
}

/**
 * 3 ^ i = n , if n is a pwer of 3
 * take log 3 both sides =>  log3(3^i) = log3(n)   
 * i * log3(3) = log3(n)    
 * i = log3(n)           // bcz log3(3) = 1
 * i = log10(n) / log10(3)
 * 
 * so we are checking in the code , if log10(n) / log10(3) is an integer => any integer when divided by 1 gives no remainder , so the modulus is 0
 */