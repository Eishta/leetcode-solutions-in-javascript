// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

let isValid = (a,b)=>{
    let map={};
    a.split('').forEach(c =>  map[c]=map[c] ? map[c] +1 : 1);
    b.split('').forEach(c=> map[c] = map[c]? map[c] -1 : -1);
    return Object.values(map).every(e=> !e);
}