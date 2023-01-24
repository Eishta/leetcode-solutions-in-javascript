// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

 var longestPalindrome = function(s) {
    if(s===null || s.length < 1)return '';
    
    let [start,end]=[0,0];
    
    for(let i =0;i<s.length;i++){
        let len1= expandAroundCenter(s,i,i); // ex = aaeaa. - starts at e
        let len2 = expandAroundCenter(s,i,i+1); // e= aabbaa - compair in pairs
        let len = Math.max(len1,len2);
        if(len > end-start){
            start= i - Math.floor((len-1)/2);
            end = Math.floor(i+len/2);
        }
    }
    return s.substring(start,end+1);
};

let expandAroundCenter = (s, l,r)=>{
    if(s===null || l> r)return 0;
    
    while(l>=0 && r< s.length && s[l]===s[r]){
        l--; r++;
    }
    return r-l-1;
}


// Method 2 DP
// Time complexity = O(n^2)
// Space Complexity = O(n^2)

var longestPalindrome = function (s) {
    let n = s.length; // length of the string
    let dp = Array(n).fill().map(a => Array(n).fill(0)); // matrix of n * n size 

    let i = 0;
    let start = 0;
    let maxLength = 1; // as each character is a palidrome in itself   ex- 'a' is a palindrome of length 1
    // for every char in s , it is a palindrome such that , dp[i][i] is always true 
    while (i < n) {
        dp[i][i] = true;
        start = i;
        i++;
    }
    i = 0;
    // loop for length of string =2 , if both chars are equal, dp[i][i+1] = true, else false
    // loop till last index-1 as we are processing 2 chars at a time
    while (i < n - 1) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true
            start = i;
            maxLength = 2
        }
        i++;
    }
    // loop for strings of length 3 till length of the string
    let k = 3;
    while (k <= n) {
        i = 0;
        // the start will go from 0 and pair k chars and check if it is a palindrome, so to have end = n-1 , i will go till max => n - k + 1
        while (i < n - k + 1) {
            let j = i + k - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                if (k > maxLength) {
                    start = i;
                    maxLength = k;
                }
            }
            i++;
        }
        k++;
    }
    return s.slice(start, start + maxLength);
};

// i = starting index
// i can go max till not including n - k + 1 because for example s = geeks , a length of 3 (k=3), means ,
// the pairs to check will be -> gee, eek, eks meand the last value that i can have is 2 ( n(5) - k(3) = 2 )


// j = ending index
// j will go from i + k -1 i.e. from 2 to length(geeks) - 1 = 4 => i.e. => i + k -1  