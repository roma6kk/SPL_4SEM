var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function findMid(nums1, nums2) {
    var boof = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    var n = boof.length;
    if (n % 2 !== 0) {
        return boof[Math.floor(n / 2)];
    }
    var mid1 = boof[n / 2 - 1];
    var mid2 = boof[n / 2];
    return (mid1 + mid2) / 2;
}
var nums1 = [1, 3];
var nums2 = [2];
console.log(findMid(nums1, nums2));
var nums3 = [1, 2];
var nums4 = [3, 4];
console.log(findMid(nums3, nums4));
