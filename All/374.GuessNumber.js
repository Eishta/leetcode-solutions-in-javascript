
var guessNumber = function(n) {
    let [l, r] = [1,n];
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        let g = guess(mid);
        console.log(mid, g, l, r)
        if(g==0)return mid;
        else if(g<0) r = mid-1;
        else l = mid+1
    }
};