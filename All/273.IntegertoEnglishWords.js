// 273. Integer to English Words
// https://leetcode.com/problems/integer-to-english-words/

var numberToWords = function (num) {
    let map19 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
        'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let map10s = [null, null, 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const mapExpo = {
        '10e8': 'Billion',
        '10e5': 'Million',
        '10e2': 'Thousand',
        '10e1': 'Hundred',
    };

    function word(n) {
        if (n === 0) return [];
        if (n <= 19) return [map19[n]];
        if (n <= 99) return [map10s[Math.trunc(n / 10)], ...word(n % 10)];
        for (let ele of Object.keys(mapExpo)) {
            let times = Math.trunc(n / ele);
            if (times > 0) {
                return [...word(times), mapExpo[ele], ...word(n % ele)]
            }
        }
    }

    return word(num).join(' ') || 'Zero'
};