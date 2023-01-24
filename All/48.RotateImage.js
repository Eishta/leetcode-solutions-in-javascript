// Input: matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]]
// Output: 
// [[7,4,1],
// [8,5,2],
// [9,6,3]]

// Tags - #again
// Method 1
let rotate = matrix => {
    let len = matrix.length;
    //find transpose
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    //reverse each row elements
    for (let i = 0; i < len; i++) {
        let [start, end] = [0, len - 1];
        while (start < end) {
            [matrix[i][start], matrix[i][end]] = [matrix[i][end], matrix[i][start]];
            start++;
            end--;
        }
    }
    return matrix;

}

// Method 2
let rotate = (arr) => {
    let [l, r] = [0, arr.length - 1];   // number of rows = number of columns = arr.length(square matrix)
    while (l < r) {
        for (let i = 0; i < r - l; i++) {
            let [t, b] = [l, r];
            let temp = arr[t][l + i];
            // tl = bl
            arr[t][l + i] = arr[b - i][l];
            // bl = br
            arr[b - i][l] = arr[b][r - i]
            // br = tr
            arr[b][r - i] = arr[t + i][r]
            // tr = temp
            arr[t + i][r] = temp;
        }
        l++;
        r--;

    }
    return arr;
}
