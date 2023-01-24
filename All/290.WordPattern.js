
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

var wordPattern = function(pattern, s) {
    let map = {};
    let words = s.split(' ');
    
    if(pattern.length !== words.length)return false;
    if(new Set([...pattern]).size !== new Set([...words]).size)return false
    for(let i =0; i< words.length;i++){
        let a = pattern[i], b = words[i];
        if(map[a]!==undefined){
             if(map[a] !== b)return false
        }else map[a]=b;
    }
    return true
};