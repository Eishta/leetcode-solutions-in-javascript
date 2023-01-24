// https://leetcode.com/problems/gas-station/description/
// Sol:-  https://leetcode.com/problems/gas-station/solutions/3011074/chatgpt-2-solutions-explained/


// 1
// brute force 
// O(n^2)

var canCompleteCircuit = function(gas, cost) {

};

// 2nd 
// O(N)
// Greedy
var canCompleteCircuit = function(gas, cost) {
    let gasSum = gas.reduce((acc, ele)=> acc+ele, 0);
    let costSum = cost.reduce((acc, ele)=> acc+ele, 0);
    if(costSum > gasSum)return -1;

    let total = 0;
    let startIndex = 0;

    for(let i =0;i< gas.length;i++){
        total += gas[i] - cost[i];
        if(total<0){
            total = 0;
            startIndex = i+1;
        }
    }
    return startIndex;
};

// 3rd 
// O(N) - greedy
var canCompleteCircuit = function(gas, cost) {
    let total = 0;
    let isPossible = 0;
    let startIndex = 0;

    for(let i =0;i< gas.length;i++){
        total += gas[i] - cost[i];
        isPossible += gas[i] - cost[i];
        if(total<0){
            total = 0;
            startIndex = i+1;
        }
    }
    return isPossible >=0 ? startIndex : -1;
};