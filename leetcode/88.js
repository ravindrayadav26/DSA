// ?Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[last] = nums2[n - 1];
      n -= 1;
    } else {
      nums1[last] = nums1[m - 1];
      m -= 1;
    }
    last -= 1;
  }

  while (m > 0) {
    nums1[last] = nums1[m - 1];
    m -= 1;
    last -= 1;
  }

  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n -= 1;
    last -= 1;
  }
  console.log(nums1);
};

const nums1 = [2, 2, 3];
const m = 3;
const nums2 = [1, 5, 6];
const n = 3;

console.log(merge(nums1, m, nums2, n));
