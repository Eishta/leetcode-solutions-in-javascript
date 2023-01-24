// Merge A and B into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.

// Input: A = [1,2,3,0,0,0], m = 3, B = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Input: A = [0], m = 0, B = [1], n = 1
// Output: [1]

let merge = (A, m , B, n)=>{
    // loop on n as only the numbers in B are to be inserted in Array A
    // if there are elements in A and A[last element] > B[last element]
        // put the last elemnt of A at last index of A
        // decreament the index for A
    // else 
        // put the last eleemnt of B at last index of A
        // decreament the index for B
    while(n){
        if(m>=0 && A[m-1] > B[n-1]){A[m+n-1] = A[--m]}
        else A[m+n-1] = B[--n];
    }
return A;
}