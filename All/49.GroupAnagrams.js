// my version
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n) 
var groupAnagrams = function(strs) {
    let map={};
    for(let ele of strs){
        let sEle = ele.split('').sort().join('');
        if(map[sEle]){
            map[sEle].push(ele);
        }
        else{
            map[sEle] = [ele];
        }
    }
    return Object.values(map);
};

// O(m) loop  // length of strs array
// inside loop => split + sort + join => O(n) + O(nlogn) + O(n) = O(nlogn) => n - vag length of str[i]
// total = O(mnlogn)