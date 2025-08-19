// ?Majority Element (Moore's Voting Algorithm)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majority = nums[0];
  let freq = 1;

  for (let i = 1; i < nums.length; i++) {
    if (freq === 0) {
      majority = nums[i];
      freq = 1;
    }
    else if (nums[i] === majority) {
      freq++;
    }
    else {
      freq--;
    }
  }

  return majority;
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
