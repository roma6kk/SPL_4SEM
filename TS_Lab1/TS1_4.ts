function findMid(nums1: number[], nums2: number[]) {
    const boof = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = boof.length;
    if (n % 2 !== 0) {
      return boof[Math.floor(n / 2)];
    }
    const mid1 = boof[n / 2 - 1];
    const mid2 = boof[n / 2];
    return (mid1 + mid2) / 2;
  }
  const nums1 = [1, 3];
  const nums2 = [2];
  console.log(findMid(nums1, nums2));
  const nums3 = [1, 2];
  const nums4 = [3, 4];
  console.log(findMid(nums3, nums4));