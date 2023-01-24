// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].
// Input: s = "III"
// Output: 3
// Example 2:

// Input: s = "IV"
// Output: 4
let romanToInteger = (str)=>{
    let num = 0;
    let romanMap={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    };  
    for(let i =0; i< str.length ; i++){
        let current = romanMap[str[i]];
        let next = romanMap[str[i+1]];
        if(next){
            if(current < next ){
                num += (next - current );
                i++;
            }
            else {
                num += current;
            }
        }
        else{
            num += current;
        }

    }
    return num;
}
