var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function moveArr(arr, k) {
    if (arr.length === 0)
        return arr;
    k = k % arr.length;
    if (k === 0)
        return arr;
    var boof1 = arr.slice(-k);
    var boof2 = arr.slice(0, arr.length - k);
    return __spreadArray(__spreadArray([], boof1, true), boof2, true);
}
var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;
console.log(moveArr(nums, k));
