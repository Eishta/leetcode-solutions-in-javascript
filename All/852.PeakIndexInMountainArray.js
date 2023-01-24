// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that
//  arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].


// Input: arr = [0,1,0]
// Output: 1   

// Input: arr = [0,10,5,2]
// Output: 1

// Input: arr = [24,69,100,99,79,78,67,36,26,19]
// Output: 2

var peakIndexInMountainArray = function (arr) {
    let i = 0, j = arr.length - 1, mid = 0;
    while (i <= j) {
        mid = Math.floor((i + j) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
        else if (arr[mid] < arr[mid - 1]) {
            j = mid - 1;
        }
        else i = mid + 1;
    }
};


const peakIndexInMountainArrayMax = A => {
	return A.indexOf(Math.max(...A))
}