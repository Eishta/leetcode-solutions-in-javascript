// Write a function that reverses a string. The input string is given as an array of characters s.
// Do not allocate extra space for another array.
//  You must do this by modifying the input array in-place with O(1) extra memory.

let reverseString = str=>{
    let start=0, end=str.length -1;
    for(; start<end;start++, end--){
        [str[start],str[end]] =[str[end], str[start]]
    }

}



var reverseString2 = function(s) {
    if(s.length <1)return s;
    
    let [l,r]=[0, s.length -1];
    while(l<r){
        [s[l],s[r]] =[s[r],s[l]];
        l++; r--;
    }
    return s;
};