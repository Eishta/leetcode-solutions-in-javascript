


var search = function (nums, target) {

    let index = -1;
    let offset = 0;

    let mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) index = mid;
    else if (nums[mid] < target) {
        index = search(nums.slice(mid + 1), target);
        offset = mid + 1;
    }
    else if (target < nums[mid]) {
        index = search(nums.slice(0, mid), target)
    }
    else {
        return -1;
    }

    return nums[index + offset] == target ? index + offset : -1;
};

let search = (nums, target) => {
    let i = 0, j = nums.length - 1, mid = 0;
    while (i <= j) {
        mid = Math.floor((i + j) / 2);
        if (nums[mid] === target) return mid;
        else if (target < nums[mid]) {
            j = mid - 1;
        }
        else i = mid + 1

    }
    return -1;
}