// ?Largest Number at Least Twice of Others

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    }
  }
  if (secondLargest * 2 >= largest && nums.includes(secondLargest *2)) {
    return nums.indexOf(largest);
  } else {
    return -1;
  }
};

// const nums = [3, 6, 1, 0];
const nums = [1,2,3,4]

console.log(dominantIndex(nums));
