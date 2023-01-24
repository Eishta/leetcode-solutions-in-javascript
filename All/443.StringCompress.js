let compress = (a) => {
    let s = a[0];
    let count = 1;
    for (let i = 1; i < a.length; i++) {
        if (a[i - 1] === a[i]) {
            count += 1;
        }
        else {
            s += count + a[i];
            count = 1;
        }
    }

    return s + count;
}

var compress1 = function (chars) {
    debugger
    if (!chars.length) return 0;
    else if (chars.length == 1) return 1;
    else {
        let start = 0;
        debugger
        let i = 1;
        for (; i < chars.length; i++) {
            if (chars[i - 1] !== chars[i]) {
                chars = chars.splice(start + 1, i - start - 1, i - start);
                start = i;
            }
        }
        chars = chars.splice(start + 1, i - start - 1, i - start);
    }
    return chars.length;
};


// wrong