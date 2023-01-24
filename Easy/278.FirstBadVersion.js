// Find the first bad version 

var solution = function(isBadVersion) {
    return function(n) {
        let l = 1, r = n;
        while(l<=r){
            let mid = Math.floor((r+l)/2);
            let b = isBadVersion(mid);
            if(b){
                let prev = mid> 1 ? isBadVersion(mid-1) : false;
                if(prev) r = mid-1;
                else return mid;
            }else l = mid+1
        }
        
    };
};