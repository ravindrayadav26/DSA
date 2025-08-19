// ?Maximum Subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max_so_far = nums[0];
  let current_max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current_max = Math.max(nums[i], nums[i] + current_max);
    max_so_far = Math.max(current_max, max_so_far);
  }
  return max_so_far;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
