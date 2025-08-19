// ?Sort Colors

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  while (mid <= end) {
    switch (nums[mid]) {
      case 0:
        let temp = nums[start];
        nums[start] = nums[mid];
        nums[mid] = temp;
        nums[mid++];
        nums[start++];
        break;
      case 1:
        nums[mid++];
        break;
      case 2:
        let temp2 = nums[mid];
        nums[mid] = nums[end];
        nums[end] = temp2;
        nums[end--];
        break;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);
